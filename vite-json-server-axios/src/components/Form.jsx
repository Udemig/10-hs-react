import { useRef } from "react";
import { v4 as generateId } from "uuid";
import axios from "axios";
const Form = ({ setTodos }) => {
  // Form gönderildiğinde çalışır.
  const inputRef = useRef();
  const selectRef = useRef();
  const handleSubmit = (e) => {
    // Sayfanın yenilenmesini engeller
    e.preventDefault();
    // useRef için kullanabiliriz.
    // const title = inputRef.current.value;
    // const status = selectRef.current.value;
    const title = e.target[0].value;
    const status = e.target[1].value;

    // api'ye kaydedilecek olan nesneyi(objeyi) hazırlama
    const newTodo = {
      id: generateId(),
      title,
      status,
      date: new Date().toLocaleDateString(),
    };
    console.log(newTodo);

    // axios
    //   .post("http://localhost:3000/todos", newTodo)
    //   .then(() => setTodos((prev) => [...prev, newTodo]));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center gap-3 my-5"
    >
      <input ref={inputRef} type="text" className="form-control shadow" />
      <select ref={selectRef} className="form-select shadow w-50">
        <option value="important">Önemli</option>
        <option value="daily">Günlük</option>
        <option value="job">İş</option>
      </select>
    </form>
  );
};

export default Form;
