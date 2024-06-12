import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../../firebase";

// Parent Route'un Element
const Protected = () => {
  const [isAuth, setIsAuth] = useState();

  useEffect(() => {
    // kullancının oturumunu izler ve oturumda bir değişiklik olduğunda cb functionı tetikler
    onAuthStateChanged(auth, (user) => {
      setIsAuth(user ? true : false);
    });
  }, []);

  // eğer kullanıcının yetkisi yoksa logine yönlendir
  if (isAuth === false) {
    return <Navigate to="/" replace />;
  }

  // eğer yetkisi varsa alt route'daki elementi göster
  return <Outlet />;
};

export default Protected;
