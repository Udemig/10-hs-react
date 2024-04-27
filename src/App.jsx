import Accordion from "./components/Accordion";
import Card from "./components/Card";
import Pagination from "./components/classComponent";
import CountDown from "./components/CountDown";
import Counter from "./components/Counter";
import FilterUser from "./components/FilterUser";
import FunctionComponent from "./components/functionComponent";
import Header from "./components/Header";
import UserPage from "./components/UserPage";
import { users } from "./constants";

const App = () => {
  // JSX (Javacript XML)

  const name = "test";
  return (
    <div>
      {/* <Header /> */}
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
      {/* <Counter /> */}
      {/* <Accordion /> */}
      {/* <Pagination /> */}
      {/* <FunctionComponent /> */}
      {/* <UserPage /> */}
      {/* <CountDown /> */}
      <FilterUser />
    </div>
  );
};
export default App;
