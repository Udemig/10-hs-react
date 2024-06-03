import React, { useRef } from "react";
import api from "../utils/api";
import { useDispatch } from "react-redux";
import { updateTodo } from "../store/actions/todoActions";

const Modal = ({ close, todo }) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const handleClick = (e) => {
    //* 1.Inputun referansını useRef ile alarak içerisindeki değere eriştik.
    const newText = inputRef.current.value;
    console.log(newText);

    if (newText == "") {
      alert("Başlık giriniz.");
      return;
    }
    //* 2.Todo nesnesi içerisinde bulunan text değerine yeni texti aktardık.Tarihide güncelledik.
    const updatedTodo = {
      ...todo,
      text: newText,
      created_at: new Date().toLocaleDateString(),
    };
    //* 3.API'a güncel veriyi kaydet
    api
      .put(`/todos/${todo.id}`, updatedTodo)
      //* 4.reducer'a elemanın güncelleneceğini haber ver
      .then(() => dispatch(updateTodo(updatedTodo)))
      //* 5.Hata durumunda ekrana alert bas.
      .catch((err) => alert("Üzgünüz bir hata oluştu."));
    //* 6.Modalı kapat
    close();
  };
  return (
    <div className="modal bg-black d-block text-dark bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Todo'yu Güncelle</h5>
          </div>
          <div className="modal-body">
            <label htmlFor="">Yeni Başlık</label>
            <input
              ref={inputRef}
              type="text"
              className="form-control shadow mt-2"
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Kaydet
            </button>
            <button type="button" className="btn btn-secondary" onClick={close}>
              İptal Et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
