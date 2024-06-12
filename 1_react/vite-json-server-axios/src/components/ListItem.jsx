import { useState } from "react";
import ContentMode from "./ContentMode";
import EditMode from "./EditMode";
import axios from "axios";
import { toast } from "react-toastify";

const ListItem = ({ todo, allTodos, setTodos }) => {
  const [isEdit, setIsEdit] = useState(false);
  // sil butonuna tıklanınca çalışır
  const handleDelete = () => {
    // apiye delete isteği at
    axios
      .delete(`http://localhost:3000/todos/${todo.id}`)
      .then(() => {
        // * Bütün todolar arasından idsini bildiğimizi kaldır.
        const filtredNotes = allTodos.filter((item) => item.id !== todo.id);
        // * State'i güncelle
        setTodos(filtredNotes);
        toast.info("Todo kaldırıldı!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((err) => {
        toast.error("Başarısız oldu!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Inputun ve selectin içerisindeki değerlere erişme
    const status = e.target[0].value;
    const title = e.target[1].value;
    if (title === "") {
      toast.info("Lütfen boş alanı doldurunuz!");
      return;
    }

    axios
      .patch(`http://localhost:3000/todos/${todo.id}`, { title, status })
      .then(() => {
        // * 1.Mevcut todonun title ve status değerlerini güncelle
        const updated = { ...todo, title, status };
        // * 2.Dizideki eski todonun yerine güncel halini koy
        const newTodos = allTodos.map((item) =>
          item.id === updated.id ? updated : item
        );
        // * 3.State'i güncelle
        setTodos(newTodos);
        // * 4.Düzenleme modundan çık
        setIsEdit(false);
      });
  };

  return (
    <li className="relative p-3 list-group-item d-flex justify-content-between align-content-center gap-3">
      <span className="date">{todo.date}</span>

      {isEdit ? (
        <EditMode
          handleUpdate={handleUpdate}
          setIsEdit={setIsEdit}
          todo={todo}
        />
      ) : (
        <ContentMode
          setIsEdit={setIsEdit}
          todo={todo}
          handleDelete={handleDelete}
        />
      )}
    </li>
  );
};

export default ListItem;
