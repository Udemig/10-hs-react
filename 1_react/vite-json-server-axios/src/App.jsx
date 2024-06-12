import { useEffect, useState } from "react";
import Form from "./components/Form";
import axios from "axios";
import ListItem from "./components/ListItem";

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    // API'ye todolar için GET isteği at
    axios
      .get("http://localhost:3000/todos")
      // istek başarılı olursa state aktar
      .then((res) => setTodos(res.data))
      // istek olumsuz olursa
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Form setTodos={setTodos} />

      <ul className="list-group">
        {todos?.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            allTodos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
