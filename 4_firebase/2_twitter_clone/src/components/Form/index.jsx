import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { BsCardImage } from "react-icons/bs";
import { toast } from "react-toastify";
import { auth, db } from "../../firebase";
import upload from "../../utils/upload";
import { useState } from "react";
import Loader from "../Loader";

const Form = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);

  // tweet gönder
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1) inputlardaki veriye eriş
    const text = e.target[0].value;
    const file = e.target[1].files[0];

    // 2) yazı ve resim içeriği yoksa fonk. durdur ve uyarı ver
    if (!text && !file) {
      return toast.warning("Lütfen içerik giriniz", {
        position: "bottom-right",
      });
    }

    setIsLoading(true);

    try {
      // todo 3) dosyayı storage'a yükle
      const url = await upload(file);

      // 4) yeni tweet belgesini kolleksiyona kaydet
      const tweetsCol = collection(db, "tweets");

      await addDoc(tweetsCol, {
        textContent: text,
        imageContent: url,
        likes: [],
        isEdited: false,
        createdAt: serverTimestamp(),
        user: {
          id: auth.currentUser.uid,
          name: auth.currentUser.displayName,
          photo: auth.currentUser.photoURL,
        },
      });
    } catch (err) {
      console.log(err);
      toast.error("Bir hata oluştu");
    }

    setIsLoading(false);

    // 5) formu sıfırla
    e.target.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 border-b border-zinc-600 p-4"
    >
      <img
        className="rounded-full h-[35px] md:h-[45px]"
        src={user?.photoURL}
        alt={user?.displayName}
      />

      <div className="w-full">
        <input
          className="w-full mt-1 mb-2 bg-transparent outline-none md:text-lg"
          placeholder="Neler Oluyor?"
          type="text"
        />

        <div className="flex justify-between items-center">
          <label
            className="text-lg transition p-4 cursor-pointer rounded-full hover:bg-gray-800"
            htmlFor="image"
          >
            <BsCardImage />
          </label>

          <input className="hidden" id="image" type="file" />

          <button
            disabled={isLoading}
            className="bg-blue-600 flex items-center justify-center px-4 py-2 min-w-[85px] min-h-[40px] rounded-full transition hover:bg-blue-800"
          >
            {isLoading ? <Loader /> : "Tweetle"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
