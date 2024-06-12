import React, { useEffect, useRef, useState } from "react";
import Loader from "./Loader";
import UserTable from "./UserTable";

const FilterUser = () => {
  // Kullanıcı verisini state de tuttuk
  const [users, setUsers] = useState(null);
  const [filtredUsers, setFiltredUsers] = useState([]);
  // inputun referansını al
  const inputRef = useRef();

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);
  const handleClick = () => {
    // "Terry"
    // inputun içerisindeki yazıya erişme
    const text = inputRef.current.value.toLowerCase();
    const filtred = users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(text) ||
        user.lastName.toLowerCase().includes(text) ||
        String(user.height).includes(text)
    );
    setFiltredUsers(filtred);
  };
  console.log(filtredUsers);
  return (
    <div>
      <div className="d-flex my-4 gap-4">
        <input ref={inputRef} type="text" className="form-control" />
        <button onClick={handleClick} className="btn btn-primary">
          Ara
        </button>
      </div>
      {users === null ? <Loader /> : <UserTable users={filtredUsers} />}
    </div>
  );
};

export default FilterUser;
