import { navSections } from "../../constant";

const Nav = ({ user }) => {
  return (
    <nav>
      <div>
        <img src="x-logo.webp" />

        {navSections.map((i, key) => (
          <div>
            {i.icon}
            <span>{i.title}</span>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
