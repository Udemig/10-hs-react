import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Quote } from "./Classic";

export const getQuotes = () => axios.get("https://dummyjson.com/quotes");

const Updated = () => {
  // get istekleri ile olan sorguları gerçekleştirmemizi sağlar
  // useQuery yapılan isteğin bütün detaylarını return eder
  const { isLoading, error, data } = useQuery({
    queryKey: ["quotes"],
    queryFn: getQuotes,
  });

  if (isLoading) return <p>Yükleniyor...</p>;

  if (error) return <p>Bir hata oluştu {error.message}...</p>;

  return (
    <div>
      {/* @ts-ignore */}
      {data.data.quotes.map((item) => (
        <p>
          <span>{item.quote}</span>
          <br />
          <b>{item.author}</b>
          <br />
          <br />
        </p>
      ))}
    </div>
  );
};

export default Updated;
