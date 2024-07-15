import { CarType } from "../types";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

type Params = {
  limit: number;
  make?: string;
  model?: string;
};

const fetchCars = async ({
  limit,
  make = "bmw",
  model = "m4",
}: Params): Promise<CarType[]> => {
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&limit=${limit}`;

  const res = await fetch(url, options);

  const data = await res.json();

  return data;
};

export default fetchCars;
