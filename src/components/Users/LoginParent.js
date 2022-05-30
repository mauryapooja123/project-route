import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Pages/Login";

function LoginParent() {
  const token = "908346579348";
  const navigate = useNavigate();
  const [data, SetData] = useState({});

  const handleOnChange = (e) => {
    e.preventDefault();
    SetData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("token", token);
    alert("fill the form");
    SetData(data);
    navigate("/home");
    console.log(data, "ooooo");
  };
  return (
    <div>
      <Login
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
        data={data}
      />
    </div>
  );
}
export default LoginParent;
