import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container";
import RestaurantCard from "../components/RestaurantCard";
import { useEffect } from "react";
import { getRestaurants } from "../redux/actions/restaurantAction";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Main = () => {
  //* Restaurant verilerine abone olmak için useSelector ü kullandık
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurants
  );

  const dispatch = useDispatch();

  // verileri almak için method
  const getData = () => {
    dispatch(getRestaurants());
  };
  // sayfa yüklendiği anda restoran verilerini alacağımız methodu çalıştırır
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <h1 className="text-3xl">Tüm Restoranlar</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : (
          restaurants.length > 0 &&
          restaurants.map((item) => (
            <RestaurantCard key={item.id} data={item} />
          ))
        )}
      </div>
    </Container>
  );
};

export default Main;
