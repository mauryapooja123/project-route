import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Register from "../Pages/Register";
import { registerUser } from "../Reducer/Submit";

function RegisterParent() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState();
  const res = useSelector((state) => state.register.register);
  const dispatch = useDispatch();
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors({});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation(user)) {
      navigate("/home");
    }
    dispatch(registerUser(user));
    // navigate("/home");

    setUser(user);
  };
  const formValidation = (data) => {
    // let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    const { name, number, email, password } = data;
    let formErrors = {};
    let isValid = true;
    if (!name) {
      isValid = false;
      formErrors["name"] = "Name is required";
    } else if (!number) {
      isValid = false;
      formErrors["number"] = "Number is required";
    } else if (!email) {
      isValid = false;
      formErrors["email"] = "Email is required";
    } else if (!password) {
      isValid = false;
      formErrors["password"] = "Password is required";
      // } else {
      //   formErrors["email"] = null;
      // }
    }
    setErrors(formErrors);
    return isValid;
  };

  return (
    <div>
      <Register
        handleChange={handleChange}
        user={user}
        handleSubmit={handleSubmit}
        res={res}
        errors={errors}
      />
    </div>
  );
}
export default RegisterParent;
