import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
const Hero = () => {
  return (
    <>
      <Container fluid className='hero'>
        <Row className='text-center h-100 '>
          <Col className='my-auto'>
            <h1 className='hero-heading'>More than 100 recipe.</h1>
            <p className='hero-p'>Recipes from all over the world</p>
            <Button className='hero-btn' size='lg'>
              <Link className='hero-link-btn' to='/recipes'>
                Explore
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Hero;
