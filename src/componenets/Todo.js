import React, { useState } from "react";
import TasksTodo from "./TasksTodo";
import styled from "styled-components";
import CreateTask from "./CreateTask";

const Container = styled.div`
  background: rgb(41, 33, 33);
  width: 40vw;
  margin: 10em auto;
  border-radius: 15px;
  padding: 20px 10px;
  color: white;
  border: 3px solid rgb(36, 110, 194);
`;
const Header = styled.div`
  margin: 0.5em;
  font-size: 2em;
  text-align: center;
`;
const Tasks = styled.div`
  //   background: rgb(12, 124, 251);
  border-radius: 5px;
  margin: 0px 5px;
  padding: 3px 5px;
  border: none;
  cursor: pointer;
  color: white;
`;

function Todo() {
  const [tasks, setTasks] = useState([
    {
      title: "Grab some Pizza",
      completed: true,
    },
    {
      title: "Do your workout",
      completed: true,
    },
    {
      title: "Hangout with friends",
      completed: false,
    },
  ]);

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };
  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  //

  return (
    <Container>
      <Header>TODO - ITEMS</Header>
      <Tasks>
        {tasks.map((task, index) => (
          <TasksTodo
            task={task}
            index={index}
            key={index}
            onCompleteTask={completeTask}
            onIndex={index}
            onRemoveTask={removeTask}
          />
        ))}
      </Tasks>
      <CreateTask onAddTask={addTask} />
    </Container>
  );
}

export default Todo;
