import React, { useContext } from "react";
import StarshipDetail from "../components/StarshipDetail";
import Context from "../Context/Context";
import Header from "../pages/Header";


const StarshipList: React.FC = () => {
  const {
    
    starships,
    selectedStarship,
    setSelectedStarship,
    showDetails,
    currentPage,
    setCurrentPage,
  } = useContext(Context);
  console.log(starships);
  
  return (
    <div>
      <div className="App py-20">
        <Header />
        <div className="border border-gray-800">
         
        </div>
        {selectedStarship && (
          <div className="flex-col">
            <div className="">
              <StarshipDetail
                starship={selectedStarship}
                onClose={() => setSelectedStarship(null)}
              />
              
            </div>
          </div>
        )}

        {starships.map((starship) => (
          <div
            key={starship.MGLT}
            className="bg-zinc-900 py-2 px-2 mb-4 cursor-pointer mx-72 mt-5 "
            onClick={() => showDetails(starship)}
          >
            <h1>{starship.name.toUpperCase()}</h1>
            <p>{starship.model}</p>
          </div>
        ))}

        <div className="flex justify-center">
          <button
            className=" text-gray-400"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            View more...
          </button>
        </div>
      </div>
    </div>
  );
};

export default StarshipList;