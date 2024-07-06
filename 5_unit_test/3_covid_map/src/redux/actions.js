import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const covidUrl = "https://covid-19-statistics.p.rapidapi.com/reports";

const headers = {
  "x-rapidapi-key": "75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247",
  "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
};

const getData = createAsyncThunk("covid/getData", async ({ code, query }) => {
  // api'a gönderilecek parametreleri hazırla
  const params = { iso: code, q: query };

  // isoCode'a göre covid verileri al
  const req1 = axios.get(covidUrl, { params, headers });

  // isoCode'a göre ülke verileri al
  const req2 = axios.get(
    code
      ? `https://restcountries.com/v3.1/alpha/${code}`
      : `https://restcountries.com/v3.1/name/${query}`
  );

  // her iki api isteği aynı anda parallel olarak atıyoruz
  const responses = await Promise.all([req1, req2]);

  // region nesnesindeki değerleri bir üst nesne ile aynı düzeye çıkardık
  const covid = {
    ...responses[0].data.data[0],
    ...responses[0].data.data[0].region,
  };

  // gereksiz değerleri kaldır
  delete covid.cities;
  delete covid.region;

  // payloadı return et
  return { covid, country: responses[1].data[0] };
});

export default getData;
