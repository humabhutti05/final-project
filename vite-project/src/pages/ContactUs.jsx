import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContactUs() {
  return (
  
    <Container className='bg-dark'>
      <h1 >Contact Us</h1>
      <Row>
        <Col md={4}>

        </Col>

{/* 2 column */}

        <Col md={{ span: 4, offset: 4 }}>
         <Row>
         <h1>Note</h1> 
<p>
  Please note we can't promise to reply to all emails we receive, but we definitely read it all.
  </p>
         </Row>
         <Row>
         <h1>For Partners   </h1>     
          <p>Developers, Publishers and Partners, please contact us here instead.</p>
          </Row>
          <Row>
          <h1>Email</h1>
          <p>contact@YGW$.com</p>
          </Row>
        </Col>
      </Row>
    
    </Container>
  );
}

export default ContactUs;