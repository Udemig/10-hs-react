import { v4 } from "uuid";
import api from "../utils/api";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions/todoActions";
const AddForm = () => {
  // Bu bileşen içerisinde dispatch methodunu kullanmamızı sağlar.
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    // storea kaydedilecek olan veriyi hazırlama
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date().toLocaleDateString(),
    };

    const promise = api
      .post("/todos", newTodo)
      // istek başarılı olursa veriyi store'a kaydet
      .then(() => dispatch(addTodo(newTodo)))
      // istek başarısız olursa hata fırlat
      .catch((err) => {
        throw new Error();
      });
    console.log(promise);

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3">
      <input
        className="form-control"
        type="text"
        placeholder="örn:React projesi"
      />
      <button className="btn btn-warning">Gönder</button>
    </form>
  );
};

export default AddForm;
