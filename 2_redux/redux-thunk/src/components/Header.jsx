import { Link } from "react-router-dom";
import Container from "./Container";
import { BsBasket } from "react-icons/bs";

const Header = () => {
  return (
    <header className="shadow">
      <Container designs={"flex justify-between items-center"}>
        <Link to={"/"} className="text-red-500 font-[900] text-2xl font-mono">
          ThunkSepeti
        </Link>

        <div className="flex items-center gap-4">
          <button className="border border-500 py-1 px-3 text-red-500 hover:bg-red-500 hover:text-white rounded transition">
            Giriş Yap
          </button>
          <button className="border border-500 py-1 px-3 text-red-500 hover:bg-red-500 hover:text-white rounded transition">
            Kayıt Ol
          </button>
          <Link
            className="hover:bg-red-500 p-3 hover:bg-opacity-50 rounded-full transition"
            to={"/cart"}
          >
            <BsBasket />
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
