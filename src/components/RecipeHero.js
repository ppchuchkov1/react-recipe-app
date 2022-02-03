import React, { useState } from 'react';
import './RecipeHero.css';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
const RecipeHero = props => {
  const [recipeValue, setRecipeValue] = useState('');

  const getRecipeValue = e => {
    setRecipeValue(e.target.value);
  };

  const submitFormData = e => {
    e.preventDefault();
    props.submitFormData(recipeValue);
  };

  return (
    <>
      <Container fluid className='py-5' style={{ backgroundColor: '#FBAA34' }}>
        <Row className='text-center'>
          <Col>
            <h3>Find and share everyday cooking inspiration on Allrecipes</h3>
            <Form
              onSubmit={submitFormData}
              style={{ width: '300px' }}
              className='mx-auto'
            >
              <Form.Group>
                <Form.Control
                  onChange={getRecipeValue}
                  type='text'
                  style={{ display: 'inline', height: '50px' }}
                  placeholder='For Example "burger"'
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RecipeHero;
