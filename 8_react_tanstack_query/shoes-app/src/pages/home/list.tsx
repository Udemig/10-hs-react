import { useQuery } from "@tanstack/react-query";
import { getShoes } from "../../api";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { Shoe } from "../../types";
import Card from "../../components/card";

const List = () => {
  const { isLoading, error, data } = useQuery<Shoe[]>({
    queryKey: ["shoes"],
    queryFn: getShoes,
  });

  return (
    <div className="col-span-4 lg:col-span-3">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : data?.length === 0 ? (
        <p>Aradığınız kriterlere uygun ürün bulunamadı </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6">
          {data?.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
