import { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import todoReducer, { initialState } from "./../reducers/todoReducer";
const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  //   const [isdarkmode, setIsDarkMode] = useState();
  //   const [todos, setTodos] = useState([]);

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault(); // sayfanın yenilenmesini engeller
    // inputtaki yazıya erişme
    const text = e.target[0].value;
    // kaydedilecek nesneyi hazırla
    const newTodo = {
      id: uuidv4(),
      title: text,
    };
    // veriyi reducerdaki state kaydeder
    dispatch({ type: "CREATE", payload: newTodo });
    // formu temizle
    e.target.reset();
  };
  return (
    <div
      className={`${
        state.isDarkMode ? "bg-dark text-white" : "bg-white text-dark"
      } vh-100 vw-100 p-5`}
    >
      <h1>TODO REDUCER</h1>
      <div>
        <button
          className={`btn ${
            state.isDarkMode ? "btn-light" : "btn-dark"
          } shadow`}
          onClick={() => dispatch({ type: "CHANGE_THEME" })}
        >
          {state.isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        className="d-flex gap-3 align-items-center my-5"
      >
        <input type="text" className="form-control shadow" />
        <button type="submit" className="btn btn-success shadow">
          Gönder
        </button>
        <button
          type="button"
          className="btn btn-secondary shadow"
          onClick={() => dispatch({ type: "CLEAR" })}
        >
          Temizle
        </button>
      </form>

      <ul className="list-group">
        {state.todos.map((item) => (
          <li
            key={item.id}
            className={`${
              state.isDarkMode ? "bg-dark text-white" : "bg-light text-dark"
            } list-group-item d-flex justify-content-between align-items-center shadow`}
          >
            <span>{item.title}</span>
            <button
              className="btn btn-danger"
              onClick={() => dispatch({ type: "DELETE", payload: item.id })}
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
