import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const getRandom = () => axios.get("https://dummyjson.com/todos/random");

const Other = () => {
  // useMutation > get isteği dışarısınaki diğer istek türlerinde veya sayfa yüklendiği anda değilde bir olay gerçekleştiği anda atmak istediğimiz get istekelrindede kullanılabilir
  const { isError, isPending, data, mutate } = useMutation({
    mutationKey: ["randomTodo"],
    mutationFn: getRandom,
  });

  return (
    <div>
      {/* @ts-ignore */}
      <button onClick={mutate}>RASTGELE TODO AL</button>
      <br />

      {!data
        ? "todo yok"
        : isPending
        ? "yükleniyor"
        : data && (
            <p>
              <span>{data.data.id}</span>
              <br />
              <span>{data.data.todo}</span>
            </p>
          )}
    </div>
  );
};

export default Other;
