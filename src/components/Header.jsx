import Button from "./Button";

const Header = () => {
  return (
    <header>
      <h1>logo</h1>
      <nav>
        <a href="">Anasayfa</a>
        <a href="">İletişim</a>
        <a href="">Blog</a>
      </nav>
      <div className="buttons">
        {/*
         * props: Bileşene gönderilen özelliklere erişirken kullanırız.
         */}
        <Button title="Kayıt Ol" styling="btn-red" />
        <Button title="Giriş Yap" styling="btn-blue" />
      </div>
    </header>
  );
};

export default Header;
