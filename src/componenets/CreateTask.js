import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  margin: 2.5em 2em;
  width: 80%;
  outline: none;
  border: none;
  padding: 0.7em;
`;
const Button = styled.button`
  width: 428px;
  height: 30px;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 28px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
`;

function CreateTask({ onAddTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return alert("Eroor");

    onAddTask(value);
    setValue("");
  };

  return (
    <form>
      <Input
        type="text"
        className="input"
        value={value}
        placeholder="Add a new task"
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={handleSubmit}> add</Button>
    </form>
  );
}
export default CreateTask;
