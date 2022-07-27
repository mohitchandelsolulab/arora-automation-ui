import axios from "axios";
import { useState } from "react";
import { Form, Button, Container, Row, Col, Spinner } from "react-bootstrap";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const Deploy = () => {
  
  const [isLoading, setIsLoading] = useState(false);

  const deployData = async () => {
    setIsLoading(true);
    axios.get(baseUrl).then((response) => {
      setIsLoading(false);
    });
  };

  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6} lg={6} sm={12} xs={12}>
            <Form>
              <fieldset>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="TextInput">Node Url</Form.Label>
                  <Form.Control
                    id="TextInput"
                    placeholder="e.g. http://127.0.0.1:8545"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="TextInput">Account Name</Form.Label>
                  <Form.Control
                    id="TextInput"
                    placeholder="e.g. aurora.test.near"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="TextInput">
                    Validator Keys Path
                  </Form.Label>
                  <Form.Control
                    id="TextInput"
                    placeholder="e.g. /User/me/documents/validator_key.json"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="TextInput">Contract Code</Form.Label>
                  <Form.Control
                    as="textarea"
                    id="TextInput"
                    placeholder="Put your smart contract code here"
                  />
                </Form.Group>
                <Button onClick={deployData}>
                  {isLoading ? (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : (
                    "Deploy"
                  )}
                </Button>
              </fieldset>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
