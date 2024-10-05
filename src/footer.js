import React from "react";

const Footer = () => {
  const a = new Date();

  return (
    <div className="Footer">
      <h3 style={{ fontFamily: "cursive", color: "crimson" }}>G o o d i e e</h3>
      <p> LOGITH {a.getFullYear()}</p>
    </div>
  );
};

export default Footer;
