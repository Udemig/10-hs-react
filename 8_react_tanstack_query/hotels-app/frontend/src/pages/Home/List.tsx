import { useQuery } from "@tanstack/react-query";
import { getPlaces } from "../../api";
import { Place } from "../../types";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Card from "./Card";

const List = () => {
  const { isLoading, error, data } = useQuery<Place[]>({
    queryKey: ["places"],
    queryFn: getPlaces,
  });

  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl">Yakınınızdaki Lokasyonlar</h1>

      <div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : (
          <div className="grid gap-5 mt-5">
            {data?.map((place) => (
              <Card place={place} key={place.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
