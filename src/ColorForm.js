import React, { useState } from "react";
import { InputGroup, Input, Button } from "reactstrap";

const ColorForm = (props) => {
  const [text, setText] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setText(value);
  }

  function handleClick() {
    props.handleAdd(text);
    setText("");
  }

  return (
    <div>
      <InputGroup>
        <Input onChange={handleChange} value={text} />
        <Button onClick={handleClick} color="success">
          Add!
        </Button>
      </InputGroup>
    </div>
  );
};

export default ColorForm;
