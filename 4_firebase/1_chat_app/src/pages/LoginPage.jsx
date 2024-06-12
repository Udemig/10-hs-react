import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const LoginPage = ({ setIsAuth }) => {
  // butona tıklanınca
  const handleClick = () => {
    // google ile giriş yap
    signInWithPopup(auth, provider)
      // başarılı olursa:
      .then((res) => {
        // yetkiyi true'ya çek
        setIsAuth(true);

        // locale token kaydet
        localStorage.setItem("token", res.user.refreshToken);
      })
      // başarısız olursa:
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="login">
        <h1>Chat Odası</h1>
        <p>Devam Etmek İçin Giriş Yap</p>

        <button onClick={handleClick}>
          <img src="google.webp" />
          <span>Google ile Gir</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
