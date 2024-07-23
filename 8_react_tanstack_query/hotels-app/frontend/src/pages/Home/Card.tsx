import { Place } from "../../types";

const Card = ({ place }: { place: Place }) => {
  return (
    <div className="border rounded-md p-4 gap-3 min-h-[300px] cursor-pointer grid grid-cols-6">
      <div className="col-span-2">
        <img className="w-full h-full object-cover rounded-lg" src={place.image_url} />
      </div>

      <div className="col-span-4">
        <h1 className="font-semibold text-2xl">{place.name}</h1>
      </div>
    </div>
  );
};

export default Card;
