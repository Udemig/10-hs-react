import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RoomPage from "./pages/RoomPage";
import ChatPage from "./pages/ChatPage";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));
  const [room, setRoom] = useState(null);

  // kullanıcının yetkisi yoksa: login
  if (!isAuth) {
    return <LoginPage setIsAuth={setIsAuth} />;
  }

  // kullanıcının yetkisi varsa:≈
  return (
    <div className="container">
      {room ? (
        // oda seçildiyse: sohbet
        <ChatPage room={room} setRoom={setRoom} />
      ) : (
        // oda seçilmesiyse: oda seçme sayfası
        <RoomPage setRoom={setRoom} setIsAuth={setIsAuth} />
      )}
    </div>
  );
}

export default App;
