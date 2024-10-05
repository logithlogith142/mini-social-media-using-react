import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Update from "./update";
import Display from "./display";
import Nav from "./nav";
export default function Dc({ del, sid, them }) {
  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <div className="delete" style={{ backgroundColor: them }}>
        <h1 style={{ backgroundColor: them }}>Are you sure to delete</h1>
        <button
          style={{ backgroundColor: them }}
          className="btn1"
          onClick={() => del(sid)}
        >
          Delete
        </button>
        <button onClick={() => navigate("/display")}>cancel</button>
      </div>
    </>
  );
}
