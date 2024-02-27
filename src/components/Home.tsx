import { useContext } from "react";
import Header from "../pages/Header";
import Context from "../Context/Context";
import { Link } from "react-router-dom";
import "../index.css";


const Home: React.FC = () => {
  const {} = useContext(Context);

  return (
    <div className="App py-20 ">
      <div className="">
        <Header />
      </div>
     
      <div className="flex flex-col items-center mt-10 mx-12">
        
        <h1 className="text-lg mb-4 text-white">
          Explore the galaxy and find your favorite starship
        </h1>
      </div>
      <div className="flex justify-center">

       
        <Link to="/starships">
          <button className="bg-black rounded-md text-white p-3 font-bold text-lg mb-10 ring-1 ring-black hover:bg-white hover:text-black">
            Explore the Galaxy
          </button>
        </Link>
        
      </div>
    </div>
  );
};

export default Home;
