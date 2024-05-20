import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import Header from "./components/Header";
import { useSelector } from "react-redux";

function App() {
  const { isDarkTheme } = useSelector((store) => store.counterReducer);

  return (
    <>
      <BrowserRouter>
        <div
          className={isDarkTheme ? "bg-dark text-white" : "bg-white text-dark"}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Counter />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
