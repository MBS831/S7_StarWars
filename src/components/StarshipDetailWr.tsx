import React from "react";
import { useParams } from "react-router-dom";
import StarshipDetail from "../components/StarshipDetail";

import { useContext } from "react";
import Context from "../Context/Context";
import Header from "../pages/Header";


const StarshipDetailWr: React.FC = () => {
  const { id } = useParams();
  const { starships, setSelectedStarship } = useContext(Context);
  const selectedStarship = starships.find((starship) => starship.MGLT === id);

  if (!selectedStarship) {
    return <div>Error 404</div>;
  }

  return (
    <div className="App py-20">
      <Header />
      
      <div className="flex-col">
        <div className="">
          <StarshipDetail
            starship={selectedStarship}
            onClose={() => setSelectedStarship(null)}
          />
         
        </div>
      </div>
    </div>
  );
};

export default StarshipDetailWr;