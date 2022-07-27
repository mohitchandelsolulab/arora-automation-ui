import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

export const ContractGui = ({ funcName, inputs, funcType }) => {

  const [formData, setFormData] = useState([]);
  const [fncOutput, setFncOutput] = useState();

  const callFunction = () => {
    console.log(formData);
  };

  const setFormInputData = (event, index, funcName) => {
    const { value } = event.target;
    const newData = [...formData];
    newData[index] = {
      ...newData[index],
      "inputName": funcName,
      "value": value,
      "funcType": funcType
    };
    setFormData(newData);
  };

  return (
    <>
      <Form>
        {inputs.map((input, index) => {
          return (
            <Form.Group className="mb-3" key={index}>
              <Form.Control
                id={input.name}
                type="text"
                placeholder={`${input.name}(${input.type})`}
                onChange={(e) => {
                  setFormInputData(e, index, input.name);
                }}
              />
            </Form.Group>
          );
        })}
        <Button
          onClick={callFunction}
          variant={funcType != "view" ? "warning" : "primary"}
        >
          {funcType != "view" ? "Call" : "View"}
        </Button>
      </Form>
      <p>Output : {fncOutput}</p>
    </>
  );
};
