import React from 'react';
import CardContent from './components/CardContent';
import { Card, Col, Container, Row } from 'react-bootstrap';

const AutoQRGenerator = () => {
  return (
    <Container className='p-4' fluid>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <Card>
            <Card.Body>
              <Card.Title className='mb-4 text-uppercase text-center' as='h1'>
                Auto QR Generator
              </Card.Title>
              <Card.Text as='div'>
                <CardContent />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AutoQRGenerator;
