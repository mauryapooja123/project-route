import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Pages/Login";
import RegisterParent from "./components/Users/RegisterParent";
import Header from "./components/Header";
import Profile from "./components/Pages/Profile";
import Home from "./components/Pages/Home";
import LoginParent from "./components/Users/LoginParent";
import SimpleForm from "./components/Pages/SimpleForm";
import SimpleUser from "./components/Users/SimpleUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/login" element={<LoginParent />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<RegisterParent />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<SimpleForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
