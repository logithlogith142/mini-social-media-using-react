import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Post from "./postpage";
import Header from "./header";
import Footer from "./footer";
import Loader from "./loader";
export default function Login() {
  const [name, setname] = useState("");
  const [error, seterror] = useState("");
  const [password, setpassword] = useState("");
  const [color, setcolor] = useState("");
  const navigate = useNavigate();
  const [check, setcheck] = useState(true);
  const a = document.getElementById("checkbox");
  const [loader, setloader] = useState("");

  const handlecheck = () => {
    setcheck(!check);
  };

  const login = () => {
    setloader(" ");
    if (name && password) {
      if (name === "logith" && password === "logith123") {
        navigate("/load");
        setcolor("greenyellow");
        setTimeout(() => {
          seterror("");
          navigate("/post");
        }, 2000);
      } else {
        seterror("Email or Password is incorrect");

        setcolor("red");
        setloader(" ");
      }
    } else {
      seterror("Name or Password is empty");

      setloader(" ");
      setcolor("red");
    }
  };
  return (
    <>
      <div className="lpage">
        <div className="login">
          <div className="name">
            <input
              type="text"
              onChange={(e) => {
                setname(e.target.value);
              }}
              style={{ borderColor: color }}
              placeholder="Name"
            />
          </div>
          <div className="password">
            <input
              type={check === true ? "password" : "text"}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              style={{ borderColor: color }}
              className="pass"
              placeholder="Password"
            />

            <input
              type="checkbox"
              id="checkbox"
              onChange={() => handlecheck()}
            />
          </div>
          <h6>{error}</h6>
          <button onClick={login}>Login</button>
        </div>
      </div>
    </>
  );
}
