import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap-v5';


function App() {
  return (
    <>
    <div className='container-header'>
      <header className='header mt-3'>
        <h1>Twitter</h1>
      </header>
    </div>
      <Container className="body-container">
        <Row className="row">
          <Col>Left Column</Col>
          <Col xs={5}>Middle Column</Col>
          <Col>Right Column</Col>
        </Row>
      </Container>
    <footer className='footer mt-3'>
      <h5>This is the footer</h5>
    </footer>
    </>
    
  )
}



export default App;
