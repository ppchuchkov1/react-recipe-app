import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Table, Row, Col, Image } from 'react-bootstrap';
import ErrorPage from '../pages/ErrorPage';
import './SingleRecipeHero.css';
const SingleRecipeHero = () => {
  let recipeId = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [recipe, setRecipe] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId.id}`)
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setRecipe(result.data.recipe);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  const ingredients = recipe.ingredients;
  console.log(recipe);
  if (error || recipe.length === 0) {
    return <ErrorPage />;
  } else if (!isLoaded) {
    return <ErrorPage />;
  } else {
    return (
      <>
        <Container fluid className='heading-section p-5'>
          <Row>
            <h1 className='single-heading text-center'>{recipe.title}</h1>
            {/* <p>
              This recipe was carefully designed and tested by{' '}
              {recipe.publisher}. Please check out directions at their website.
            </p> */}
          </Row>
        </Container>
        <Container className='mt-5'>
          <Row className='single-descriotion py-5 text-center'>
            <Col lg={4}>
              <i className='fas fa-clock desciption-icon'></i>
              <p className='desciption-p mt-3'>{recipe.cooking_time}min</p>
            </Col>
            <Col lg={4}>
              <i class='fas fa-user-friends desciption-icon'></i>
              <p className='desciption-p mt-3'>{recipe.servings} servings</p>
            </Col>
            <Col lg={4}>
              <i className='fas fa-link desciption-icon'></i>
              <a href={recipe.source_url} target='blank'>
                <p className='desciption-p mt-3'>{recipe.publisher}</p>
              </a>
            </Col>
          </Row>
          <Row className='py-5'>
            <Col sm={12} lg={6}>
              <Image src={recipe.image_url} className='single-image' />
            </Col>
            <Col>
              <Table striped bordered hover size='sm'>
                <thead>
                  <tr>
                    <th>
                      <h3>Ingredients You Needed</h3>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ingredients ? (
                    ingredients.map(ing => {
                      return (
                        <tr>
                          <th>
                            {ing.quantity} {ing.unit} {ing.description}
                          </th>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <th>...Loading</th>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};
export default SingleRecipeHero;
