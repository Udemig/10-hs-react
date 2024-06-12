import React from "react";

const RoomPage = ({ setIsAuth, setRoom }) => {
  // çıkış yap
  const logout = () => {
    // yetkiyi false'a çek
    setIsAuth(false);

    // local'i temizle
    localStorage.removeItem("token");
  };

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    const room = e.target[0].value.trim().toLowerCase();

    setRoom(room);
  };

  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Odası</h1>
      <p>Hangi Odaya Giriceksiniz</p>

      <input placeholder="ör:haftaiçi" type="text" required />

      <button type="submit">Odaya Gir</button>
      <button onClick={logout} type="button">
        Çıkış Yap
      </button>
    </form>
  );
};

export default RoomPage;
