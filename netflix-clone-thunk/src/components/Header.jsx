import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-10">
      <Link>
        <img
          className="max-w-[150px]"
          src="/public/netflix_logo.svg"
          alt="netflix"
        />
      </Link>
    </header>
  );
};

export default Header;
