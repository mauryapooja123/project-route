import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

function Home() {
  const navigate = useNavigate();
  const removeToken = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <p>
        Sahibzada Ajit Singh Nagar District has been carved out of areas falling
        connectivity with the union territory ,
      </p>

      <button type="submit" onClick={removeToken}>
        Logout
      </button>
    </div>
  );
}
export default Home;
