import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Nav({ color }) {
  const navigate = useNavigate();
  const themef = () => {
    console.log(color);
  };
  return (
    <div className="nav">
      <a
        onClick={() => {
          navigate("/post");
        }}
      >
        Home
      </a>
      <a
        onClick={() => {
          navigate("/about");
        }}
      >
        About
      </a>
    </div>
  );
}
