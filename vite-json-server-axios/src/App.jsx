import { useEffect, useState } from "react";
import Form from "./components/Form";
import axios from "axios";
import ListItem from "./components/ListItem";

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/todos").then((res) => setTodos(res.data));
  }, []);
  return (
    <>
      <Form setTodos={setTodos} />

      {todos?.map((todo) => (
        <ListItem key={todo.id} todo={todo} />
      ))}
    </>
  );
}

export default App;
