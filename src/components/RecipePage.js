import React, { useEffect, useState } from 'react';
import './RecipePage.css';
import ReactPaginate from 'react-paginate';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import RecipeHero from './RecipeHero';
import { Link } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
function RecipePage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const recipePerPage = 6;
  const [recipes, setRecipes] = useState('');
  const pagesVisited = pageNumber * recipePerPage;
  console.log(recipes);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${
        recipes ? recipes : 'pizza'
      }`
    )
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setItems(result.data.recipes);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [recipes]);

  const displayRecipe = items.slice(pagesVisited, pagesVisited + recipePerPage);
  const pageCount = Math.ceil(items.length / recipePerPage);
  console.log(items);
  const changePage = ({ selected }) => {
    console.log(selected);
    setPageNumber(selected);
  };

  if (error || items.length === 0) {
    return <ErrorPage />;
  } else if (!isLoaded) {
    return (
      <>
        <ErrorPage />
      </>
    );
  } else {
    return (
      <>
        <RecipeHero submitFormData={recipes => setRecipes(recipes)} />
        <Container>
          <Row>
            {displayRecipe.map(recipe => (
              <Col>
                <Card className='mt-5 recipe-card '>
                  <Card.Img
                    variant='top'
                    style={{ height: '200px' }}
                    src={recipe.image_url}
                  />
                  <Card.Body>
                    <Card.Title>{recipe.title}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Link to={recipe.id}>
                      <Button className='recipe-btn px-5'>VIEW RECIPE</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row style={{ width: '360px' }} className='mx-auto my-5'>
            <ReactPaginate
              previousLabel={'prev'}
              nextLabel={'next'}
              pageCount={pageCount}
              onPageChange={changePage}
              pageClassName='page-item'
              pageLinkClassName='page-link'
              previousClassName='page-item'
              previousLinkClassName='page-link'
              nextClassName='page-item'
              nextLinkClassName='page-link'
              breakLabel='...'
              breakClassName='page-item'
              breakLinkClassName='page-link'
              containerClassName='pagination'
              activeClassName='active'
            />
          </Row>
        </Container>
      </>
    );
  }
}

export default RecipePage;
