import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';

export const Navigation = ({ active }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center">
          <Nav className="justify-content-center" activeKey={active}>
            <Nav.Item>
              <Nav.Link eventKey="1" href="/">
                Deploy Contract
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" href="/interact">
                Interact With Contract
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
