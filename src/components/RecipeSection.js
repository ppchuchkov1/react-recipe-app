import React, { useEffect, useState } from 'react';
import './RecipeSection.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PreloadRecipe from './PreloadRecipe';
function RecipeSection() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza')
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
  }, []);
  const recipes = items.slice(1, 10);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <PreloadRecipe />;
  } else {
    return (
      <>
        <Container>
          <Row>
            {recipes.map(recipe => (
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
                    <Link to={`/recipes/${recipe.id}`}>
                      <Button className='recipe-btn px-5'>VIEW RECIPE</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default RecipeSection;
