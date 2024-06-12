import { useParams } from "react-router-dom";
import DetailPageView from "../view/DetailPageView";
import { useEffect, useState } from "react";
import axios from "axios";
import { DetailModel } from "../model/DetailModel";

const DetailPageController = () => {
  const params = useParams();
  const [coin, setCoin] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios
      .get(`/assets/${params.id}`)
      .then((res) => setCoin(res.data.data))
      .catch((err) => console.log(err));

    axios
      .get(`/assets/${params.id}/history?interval=d1`)
      .then((res) => setHistory(res.data.data));
  }, []);

  const model = new DetailModel(coin, history);

  return <DetailPageView model={model} coin={coin} />;
};

export default DetailPageController;
