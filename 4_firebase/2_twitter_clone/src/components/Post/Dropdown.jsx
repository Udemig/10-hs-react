import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import { useState, useRef } from "react";
import Modal from "../Modal";

const Dropdown = ({ tweet }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // input referansı
  const inputRef = useRef();

  // dropdownı kapat
  const close = () => {
    inputRef.current.checked = false;
  };

  // silme
  const handleDelete = () => {
    // silince tweet dökümanının referansını al
    const tweetRef = doc(db, "tweets", tweet.id);

    // dökümanı kaldır
    deleteDoc(tweetRef)
      .then(() => toast.info("Tweet akıştan kaldırıldı"))
      .catch(() => toast.error("Bir sorun oluştu"));

    close();
  };

  // güncelleme
  const handleEdit = () => {
    setIsModalOpen(true);

    close();
  };

  return (
    <>
      <label className="popup">
        <input ref={inputRef} type="checkbox" />
        <div className="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="popup-window">
          <legend>Eylemler</legend>
          <ul>
            <li>
              <button onClick={handleEdit}>
                <MdEdit />
                <span>Düzenle</span>
              </button>
            </li>
            <hr />
            <li>
              <button onClick={handleDelete}>
                <FaTrashAlt className="text-red-500" />
                <span>Sil</span>
              </button>
            </li>
          </ul>
        </nav>
      </label>

      {isModalOpen && (
        <Modal tweet={tweet} close={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default Dropdown;
