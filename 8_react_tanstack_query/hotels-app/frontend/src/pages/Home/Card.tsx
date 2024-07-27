import { Link } from "react-router-dom";
import { Place } from "../../types";
import Availability from "./Availability";
import Rating from "./Rating";

const Card = ({ place }: { place: Place }) => {
  return (
    <Link
      to={`/place/${place.id}`}
      className="border rounded-md p-4 gap-3 min-h-[300px] cursor-pointer grid grid-cols-6"
    >
      <div className="col-span-2">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={place.image_url}
        />
      </div>

      <div className="col-span-4 flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-2xl">{place.name}</h1>

            <Availability status={place.availability} />
          </div>

          <p>{place.location}</p>

          <div className="flex gap-4">
            {place.amenities.slice(0, 2).map((i, key) => (
              <span className="border p-1 rounded-md" key={key}>
                {i}
              </span>
            ))}
          </div>

          <Rating point={place.rating} />
        </div>

        <div className="flex flex-col items-end">
          <span className="text-2xl font-bold">
            {place.price_per_night}$
          </span>
          <span className="text-xs text-gray-400">
            vergiler ve ücretler dahildir
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
