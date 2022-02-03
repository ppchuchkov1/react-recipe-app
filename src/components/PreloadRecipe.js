import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import placeholder from '../assets/placeholder-img.png';
const PreloadRecipe = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className='mt-5 recipe-card '>
              <Card.Img
                variant='top'
                style={{ height: '200px' }}
                src={placeholder}
              />
              <Card.Body>
                <Card.Title>Example Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>

                <Button className='recipe-btn'>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='mt-5 recipe-card '>
              <Card.Img
                variant='top'
                style={{ height: '200px' }}
                src={placeholder}
              />
              <Card.Body>
                <Card.Title>Example Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>

                <Button className='recipe-btn'>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='mt-5 recipe-card '>
              <Card.Img
                variant='top'
                style={{ height: '200px' }}
                src={placeholder}
              />
              <Card.Body>
                <Card.Title>Example Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>

                <Button className='recipe-btn'>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='mt-5 recipe-card '>
              <Card.Img
                variant='top'
                style={{ height: '200px' }}
                src={placeholder}
              />
              <Card.Body>
                <Card.Title>Example Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>

                <Button className='recipe-btn'>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='mt-5 recipe-card '>
              <Card.Img
                variant='top'
                style={{ height: '200px' }}
                src={placeholder}
              />
              <Card.Body>
                <Card.Title>Example Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>

                <Button className='recipe-btn'>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='mt-5 recipe-card '>
              <Card.Img
                variant='top'
                style={{ height: '200px' }}
                src={placeholder}
              />
              <Card.Body>
                <Card.Title>Example Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>

                <Button className='recipe-btn'>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PreloadRecipe;
