import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { ContractGui } from "./ContractGui";

const abi = require("../abi.json");

const contractABI = abi.abi ? abi.abi : abi;

export const FunctionIntract = () => {
  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8} lg={8} sm={12} xs={12}>
            <h2>Functions</h2>
            <Accordion defaultActiveKey="0">
              {abi &&
                contractABI.map((func, index) => {
                  if (func.type !== "function") return null;
                  return (
                    <Accordion.Item key={index} eventKey={index}>
                      <Accordion.Header>
                        {func.name + " (" + func.stateMutability + ") "}
                      </Accordion.Header>
                      <Accordion.Body>
                        <ContractGui
                          funcName={func.name}
                          inputs={func.inputs}
                          funcType={func.stateMutability}
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
};
