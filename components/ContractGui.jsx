import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

export const ContractGui = ({ funcName, inputs, funcType }) => {

  const [formInputData, setFormInputData] = useState([])
  const [formData, setFormData] = useState([{}]);

  const [fncOutput, setFncOutput] = useState();

  const callFunction = () => {
    console.log(formData);
  };

  const setInputData = (event, index) => {
    const { value } = event.target;
    const newData = [...formInputData];
    newData[index] = {
      ...newData[index],
      [index]: value,
    };
    setFormInputData(newData);
  };
  
  useEffect(() => {
    setFormData([{
      "methodName": funcName,
      "arguments": formInputData,
      "functionType": funcType
    }])
  }, [formInputData])
  
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
                  setInputData(e, index, input.name);
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
      <p className="mt-3">Output : {fncOutput}</p>
    </>
  );
};
