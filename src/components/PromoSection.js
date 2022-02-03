import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './PromoSection.css';
import hamburgerVideo from '../assets/ham-video.webm';
const PromoSection = () => {
  return (
    <>
      <Container className='promo-section p-5 mt-5'>
        <Row className='h-100'>
          <Col className='my-auto'>
            <h1 className='promo-heading'>
              Subacribe to get free promo code !
            </h1>
            <p className='text-light'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              ullam perferendis eaque enim dolorum minima. Tenetur ex officiis,
              voluptas sunt accusamus autem. Esse deleniti debitis dolore
              pariatur nulla laborum facilis.
            </p>

            <Form>
              <Form.Group className='mb-3'>
                <Form.Control
                  type='email'
                  style={{ width: '300px', display: 'inline', float: 'left' }}
                  placeholder='Example@gmail.com'
                />
              </Form.Group>
              <Button className='promo-btn' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
          <Col>
            <video
              className='promo-video'
              width='520px'
              height='240px'
              loop
              autoPlay
              muted
            >
              <source src={hamburgerVideo} type='video/mp4' />
            </video>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PromoSection;
