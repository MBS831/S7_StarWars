import "./App.css";
import StarshipsList from "./pages/StarshipList";
import Context from "./Context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import './index.css';

import { useContext } from "react";
import ProtectedRoute from "./components/utils/ProtectedRoute";

function App(): JSX.Element {
  const { isLoggedIn } = useContext(Context);
  console.log("isLoggedIn:", isLoggedIn);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            element={
              <ProtectedRoute redirectPath={"/login"} user={isLoggedIn} />
            }
          >
            <Route path="/starships" element={<StarshipsList />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="*" element={<div>Error 404</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;