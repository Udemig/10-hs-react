const Card = ({ name, img, surname, height }) => {
  console.log(height);
  return (
    <div>
      <img src={img} alt="" />
      <h1>Kullanıcı Adı:{name}</h1>
      <h1>Kullanıcı Soyadı::{surname}</h1>

      {/*
          * Koşullu renderlama 
          Boy değeri varsa onu ekrana yaz, yoksada hiçbir şey yazma.
          >> Yöntem 1: Ternary Operator
          * else durumunda da ekrana bir şey basmak istediğimiz kullanırız.
          >> Yöntem 2: && ve
          * else durumunda ekrana hiçbir şey basılmaz.
        */}

      {/* {height ? <h1>Kullanıcının Boyu:{height}</h1> : <h1>Boy Bulunamadı</h1>} */}

      {height && <h1>Kullanıcı Boyu:{height}</h1>}
    </div>
  );
};
export default Card;
