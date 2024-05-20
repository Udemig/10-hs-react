import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "./../utils/api";
import Loader from "../components/Loader";
import { baseImgUrl } from "../constants";
import DetailDisplay from "../components/DetailDisplay";
import millify from "millify";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ActorCard from "../components/ActorCard";
const DetailPage = () => {
  const [movie, setMovie] = useState(null);
  //* URL'den filmin idsini useParams methodu ile aldık.
  const { id } = useParams();

  useEffect(() => {
    const params = {
      append_to_response: "credits,videos",
    };

    api
      .get(`movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(movie);
  return (
    <div>
      {!movie ? (
        <Loader />
      ) : (
        <div>
          {/* üst alan */}
          <div className="relative  h-[20vh]">
            <img
              className="h-full w-full object-cover"
              src={baseImgUrl + movie.backdrop_path}
              alt=""
            />
            <div className="absolute bg-black inset-0 bg-opacity-50 grid place-items-center">
              <h2 className="text-3xl font-semibold">{movie.title}</h2>
            </div>
          </div>
          {/* orta alan */}
          <div className="my-10 grid gird-cols-1 md:grid-cols-2">
            <div>
              <DetailDisplay title={"Kategoriler"} data={movie.genres} />
              <DetailDisplay
                title={"Konuşulan Diller"}
                data={movie.spoken_languages}
              />
              <DetailDisplay
                title={"Yapımcı Şirketler"}
                data={movie.production_companies}
              />
              <DetailDisplay
                title={"Yapımcı Ülkeler"}
                data={movie.production_countries}
              />
            </div>

            <div className="flex flex-col gap-2">
              <p>{movie.overview}</p>
              <p>
                <span>Bütçe:</span>
                <span className="text-green-500 ms-2">
                  ${millify(movie.budget)}
                </span>
              </p>
              <p>
                <span>Hasılat:</span>
                <span className="text-green-500 ms-2">
                  ${millify(movie.revenue)}
                </span>
              </p>
            </div>
          </div>

          {/* slider alanı */}
          <div>
            <Splide
              options={{
                pagination: false,
                autoWidth: true,
                gap: "10px",
              }}
            >
              {movie.credits.cast.map((actor, i) => (
                <SplideSlide>
                  <ActorCard key={i} actor={actor} />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
