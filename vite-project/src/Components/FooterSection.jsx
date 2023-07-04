// import React from 'react'

// export default function FooterSection() {
//   return (
//     <div className='bg-dark fs-5 fw-bold text-center text-white py-2'>dal lena yaad saa bawalii</div>
//   )
// }


import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CookiesPolicy from '../pages/CookiesPolicy';

const FooterSection = () => {
  return (
    <footer className="footer bg-dark ">
      <Container className=' fs-5 fw-semibold text-center text-white py-2'>
        <Row>
          <Col>
           <Link>About US</Link>
          </Col>
          <Col>
            <Link>Help Center</Link>
          </Col>
          <Col>
            <Link>bad main likho ge</Link>
          </Col>
        </Row>
        <Row>
          <Col>
          <Link>Terms and Conditions</Link>
          </Col>
          <Col>
          <Link>Support And Bugs</Link>
          </Col>
          <Col>
          <Link>bad main likho ga</Link>
          </Col>
        </Row>
        <Row>
          <Col>
          <Link to="/CookiesPolicy">Cookies Policy</Link>
          </Col>
          <Col>
          <Link>Contact Us</Link>
          </Col>
          <Col>
          <Link>bad main likho ga</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterSection;
