import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Container, Row, Col } from 'react-bootstrap-v5';


function App() {
  return (
    <>
      <Header />
        <Container fluid="lg">
          <Row className="row">
            <Col>Left Column</Col>
            <Col xs={5}>Middle Column</Col>
            <Col>Right Column</Col>
          </Row>
        </Container>
      <Footer />
    </>
    
  )
}

export default App;
