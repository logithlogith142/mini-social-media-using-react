import React from "react";
import Nav from "./nav";

export default function About({ them }) {
  return (
    <>
      <Nav />
      <div className="about" style={{ backgroundColor: them }}>
        <h1 style={{ backgroundColor: them }}>
          Hii there, Iam Logith V ,This app was developed for only learning
          purpose
        </h1>
      </div>
    </>
  );
}
