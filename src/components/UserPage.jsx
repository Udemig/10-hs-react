import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${page}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [page]);
  console.log(user);

  return (
    <div>
      {user === null ? <p>Yükleniyor...</p> : <UserCard user={user} />}

      <div className="d-flex justify-content-between align-items-center m-5">
        <button
          disabled={page === 1}
          className="btn btn-secondary"
          onClick={() => setPage(page - 1)}
        >
          Önceki
        </button>
        <p>{page}</p>
        <button
          disabled={page === 10}
          className="btn btn-success"
          onClick={() => setPage(page + 1)}
        >
          Sonraki
        </button>
      </div>
    </div>
  );
};

export default UserPage;
