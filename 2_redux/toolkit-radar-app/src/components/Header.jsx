import { useSelector } from "react-redux";

const Header = () => {
  const { isLoading, isError, flights } = useSelector((store) => store.flight);
  return (
    <header>
      <div>
        <img src="/public/plane-logo.png" alt="" />
        <h3>Uçuş Radarı</h3>
      </div>
      <p>
        {isLoading
          ? "Uçuşlar Hesaplanıyor..."
          : isError
          ? "Üzgünüz bir hata oluştu"
          : flights.length + "Uçuş Bulundu"}
      </p>
    </header>
  );
};

export default Header;
