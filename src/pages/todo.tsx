import React, { useState } from "react";
import { Form, Input, Button, Segment } from "semantic-ui-react";
import Card from "../components/card";

const Todo: React.FunctionComponent = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodo] = useState<string[]>([]);
  // const [dones, setDone] = useState<string[]>([]);

  return (
    <Segment basic>
      <h1 data-testid="header1">Todo List</h1>
      <Form>
        <Input
          placeholder="todo"
          value={text}
          onChange={event => {
            setText(event.target.value);
          }}
        />
        <Button data-testid="submit" onClick={() => setTodo([...todos, text])}>
          submit
        </Button>
      </Form>
      {todos.map((todo, index) => (
        <Card data={todo} key={index} />
      ))}
    </Segment>
  );
};

export default Todo;
