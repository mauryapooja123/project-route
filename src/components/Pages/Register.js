import React from "react";
import { useSelector } from "react-redux";

function Register(props) {
  const res = useSelector((state) => state.register.register);
  return (
    <>
      <form action="/action_page.php" onSubmit={props.handleSubmit}>
        <div class="container">
          <h1>Register</h1>

          <label for="name">
            <b>Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            id="name"
            value={props.user.name}
            onChange={props.handleChange}
          />

          <p style={{ color: "red" }}>{props.errors && props.errors.name}</p>

          <label for="number">
            <b>Number</b>
          </label>
          <input
            type="number"
            placeholder="Enter Number"
            name="number"
            id="number"
            value={props.user.number}
            onChange={props.handleChange}
          />

          <p style={{ color: "red" }}>{props.errors && props.errors.number}</p>
          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            value={props.user.email}
            onChange={props.handleChange}
          />
          <p style={{ color: "red" }}>{props.errors && props.errors.email}</p>

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="password"
            value={props.user.password}
            onChange={props.handleChange}
          />
          <p style={{ color: "red" }}>
            {props.errors && props.errors.password}
          </p>

          <button type="submit" class="registerbtn">
            Register
          </button>
        </div>
      </form>
    </>
  );
}
export default Register;
