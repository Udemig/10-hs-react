import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
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
