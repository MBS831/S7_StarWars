import React from "react";
import { Starship } from "../types";

interface Props {
  starship: Starship;
  onClose: () => void;
}

const StarshipDetail: React.FC<Props> = ({ starship, onClose }) => {
  const starshipImageUrl = `https://starwars-visualguide.com/assets/img/starships/${starship.url
    .split("/")
    .slice(-2, -1)}.jpg`;
  const defaultImg =
    "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";

  console.log(starshipImageUrl);

  return (
    <div>
      <div className="">
        <div className="w-9/12 my-5 ms-36">
          <div className="border-y border-gray-600 py-4 px-2 font-bold text-white mb-5">
            STARSHIPS
          </div>
          <div className="flex">
            <img
              className="w-96 bg-contain bg-center rounded-s-md"
              style={{ backgroundImage: `url(${defaultImg})` }}
              src={starshipImageUrl}
            />

            <div className="bg-neutral-800 font-mono text-xs text-gray-300 grid gap-2 px-4 py-3 border-s border-red-400 rounded-e-md">
              <h2 className="font-bold">{starship.name.toUpperCase()}</h2>
              <p className="pb-4">
                Lorem ipsum dolor sit amet consec tetur, adipi sicing elit. Ab
                hic autem, laudantium, delectus consequuntur magni impedit enim
                commodi!
              </p>
              <div className="grid grid-cols-2 gap-4">
                <p>Capacity: {starship.cargo_capacity}</p>
                <p>Length: {starship.length} meters</p>
                <p>Manifacturer: {starship.crew}</p>
                <p>Speed: {starship.max_atmosphering_speed} /hour</p>
                <p>Passengers: {starship.passengers}</p>
                <p>Crew: {starship.crew}</p>
              </div>

              <button
                className="self-center bg-slate-400 text-white mx-56 rounded-md mt-14"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarshipDetail;