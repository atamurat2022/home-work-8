import styled from "styled-components";

const TaskDiv = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  padding: 0.5em;
  margin: 0.5em;
`;
const Button = styled.button`
  background: rgb(12, 124, 251);
  border-radius: 5px;
  margin: 0px 5px;
  padding: 3px 5px;
  border: none;
  cursor: pointer;
  color: white;
  float: right;
`;

function Task({ task, onCompleteTask, onIndex, onRemoveTask }) {
  return (
    <>
      <TaskDiv
        className="task"
        style={{ textDecoration: task.completed ? "line-through" : "" }}
      >
        {task.title}

        <Button onClick={() => onCompleteTask(onIndex)}>Complete</Button>
        <Button
          style={{ background: "red" }}
          onClick={() => onRemoveTask(onIndex)}
        >
          x
        </Button>
      </TaskDiv>
    </>
  );
}
export default Task;
