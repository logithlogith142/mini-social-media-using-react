import React from "react";
import Nav from "./nav";

export default function Loader({ them }) {
  return (
    <>
      <Nav />
      <div className="load" style={{ backgroundColor: them }}>
        <div
          className="loader"
          style={{ marginLeft: 10, backgroundColor: them }}
        ></div>
        <h5
          style={{
            marginTop: 20,
            backgroundColor: them,
          }}
        >
          Loading...
        </h5>
      </div>
    </>
  );
}
