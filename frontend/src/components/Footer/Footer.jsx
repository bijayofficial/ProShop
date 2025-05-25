import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <>
      <footer className="bg-dark text-light py-3 mt-5">
        <Container>
          <Row>
            <Col className="text-center">
              &copy; {currentDate} ProShop. All rights reserved.
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
