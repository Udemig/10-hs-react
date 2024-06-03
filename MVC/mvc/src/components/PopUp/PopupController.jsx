import React, { useEffect, useState } from "react";
import PopupView from "./PopupView";
import axios from "axios";

const PopupController = ({ userName, setShowPopup }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts?user=${userName}`)
      .then((response) => setData(response.data));
  }, [userName]);
  console.log(data);
  return (
    <PopupView userName={userName} data={data} setShowPopup={setShowPopup} />
  );
};

export default PopupController;
