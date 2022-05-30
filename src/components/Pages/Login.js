import React from "react";

function Login(props) {
  return (
    <>
      <form action="/action_page.php" onSubmit={props.handleSubmit}>
        <div class="container">
          <h1>Login</h1>

          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            component="input"
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            component="input"
          />

          <button type="submit" class="registerbtn">
            Login
          </button>
        </div>
      </form>
    </>
  );
}
export default Login;
