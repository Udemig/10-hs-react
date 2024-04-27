import React, { useEffect, useRef, useState } from "react";
import Loader from "./Loader";

const FilterUser = () => {
  const [users, setUsers] = useState(null);
  // inputun referansını al
  const inputRef = useRef();
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleClick = () => {
    // inputun içerisindeki yazıya erişme
    const text = inputRef.current.value.toLowerCase();
    console.log(text);
  };
  return (
    <div>
      <div className="d-flex my-4 gap-4">
        <input ref={inputRef} type="text" className="form-control" />
        <button onClick={handleClick} className="btn btn-primary">
          Ara
        </button>
      </div>
      {users === null ? <Loader /> : <p>card</p>}
    </div>
  );
};

export default FilterUser;
