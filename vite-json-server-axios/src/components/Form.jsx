import { useRef } from "react";
import { v4 as generateId } from "uuid";
import axios from "axios";
import { toast } from "react-toastify";
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

    // oluşturduğumuz newTodo objesini db.json dosyasına eklemek için post isteği attık
    axios
      .post("http://localhost:3000/todos", newTodo)
      .then(() => {
        toast.success("Todo eklendi!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTodos((prev) => [...prev, newTodo]);
      })
      // istek başarısız olursa
      .catch((err) =>
        toast.error("Üzgünüz sorun oluştu!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      );
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
