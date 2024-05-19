import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { useDispatch } from "react-redux";
import { getPopuler } from "../redux/actions/movieActions";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopuler());
  }, []);
  return (
    <div>
      <Hero />
    </div>
  );
};

export default MainPage;
