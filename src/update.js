import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Nav from "./nav";

export default function Update({
  upinf,
  setupin,
  setupin1,
  setupin2,
  error,
  color,
  setcolor,
  color2,
  them,
}) {
  if (error === "Loading...") {
    setcolor("black");
  } else {
    setcolor("red");
  }
  return (
    <>
      <Nav />
      <div className="update" style={{ backgroundColor: them }}>
        <label style={{ backgroundColor: them }}>
          Name:
          <input
            type="text"
            style={{ borderBottomColor: color2, backgroundColor: them }}
            onChange={(e) => setupin(e.target.value)}
          />
        </label>
        <label style={{ backgroundColor: them }}>
          Password:
          <input
            type="text"
            onChange={(e) => setupin1(e.target.value)}
            style={{ borderBottomColor: color2, backgroundColor: them }}
          />
        </label>
        <label style={{ backgroundColor: them }}>
          Caption:
          <textarea
            typeof="text"
            onChange={(e) => setupin2(e.target.value)}
            style={{ borderColor: color2, backgroundColor: them }}
          />
        </label>
        <h6
          style={{
            color: color,
            marginTop: 30,
            marginLeft: 10,
            backgroundColor: them,
          }}
        >
          {error}
        </h6>
        <button onClick={upinf}>update</button>
      </div>
    </>
  );
}
