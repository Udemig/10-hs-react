import { useState } from "react";
import AddPostModel from "./AddPostModal";
import AddPostView from "./AddPostView";
import api from "./../../constants";
import { useNavigate } from "react-router-dom";
const AddPostController = () => {
  const formModel = new AddPostModel();
  const navigate = useNavigate();

  const [form, setForm] = useState(formModel.state);

  //* Key:Hangi inputa yazıldığının bilgisidir
  //* value:Inputun içerisindeki değer
  const onInputChange = (key, e) => {
    setForm({ ...form, [key]: e.target.value });
  };
  console.log(form);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.user || !form.text || !form.title) {
      alert("Tüm alanları doldurunuz");
      return;
    }
    api.post("posts", form).then((response) => navigate("/"));
  };
  return (
    <AddPostView handleSubmit={handleSubmit} onInputChange={onInputChange} />
  );
};

export default AddPostController;
