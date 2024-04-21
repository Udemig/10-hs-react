import Card from "./components/Card";
import Counter from "./components/Counter";
import Header from "./components/Header";
import { users } from "./constants";

const App = () => {
  // JSX (Javacript XML)

  const name = "test";
  return (
    <div>
      {/* <Header />
      <button className="add">{name}</button> */}

      {/*
       * Çoklu renderlama
       * users dizisindeki herbir kullanıcı
       * için ekrana Card componentitni(bileşenini aktardık.)
       */}
      {/* {users.map((user, index) => (
        <Card
          name={user.first_name}
          surname={user.last_name}
          img={user.image}
          height={user.height}
          key={user.id}
        />
      ))} */}
      <Counter />
    </div>
  );
};
export default App;
