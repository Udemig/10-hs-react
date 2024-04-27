import React from "react";

const UserCard = ({ user }) => {
  console.log(user);
  return (
    <div className="card p-3 shadow d-flex flex-column gap-4">
      <h1 className="badge bg-danger p-2 me-2">{user.name}</h1>
      <h3 className="badge bg-secondary p-2 me-2">
        Kullanıcı Adı: <span>{user.username}</span>
      </h3>
      <h3 className="badge bg-success p-2 me-2">
        Email: <span>{user.email}</span>
      </h3>
      <h3 className="badge bg-primary p-2 me-2">
        Adress:{user.address.city + " " + user.address.street}
      </h3>
      <h3 className="badge bg-secondary p-2 me-2">
        Şirket: <span>{user.company.name}</span>{" "}
      </h3>
    </div>
  );
};

export default UserCard;
