import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListController from "./pages/ListPostPage/ListController";
import AddPostController from "./pages/AddPostPage/AddPostController";
import Header from "./components/Header";
import "./assets/style.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ListController />} />
        <Route path="/add-post" element={<AddPostController />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
