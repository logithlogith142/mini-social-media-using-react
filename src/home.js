import { Route, Routes, Link, useNavigate } from "react-router-dom";
import App from "./App";
import Post from "./postpage";
import Input from "./input";
import Feed from "./feed";
import Display from "./display";
import Header from "./header";
import Footer from "./footer";

export default function Home({
  datas1,
  gecid,
  setsimage,
  color3,
  theme,
  them,
  btn,
}) {
  let c;

  console.log(color3);
  const navigate = useNavigate();
  if (!datas1) {
    return <h1></h1>;
  }
  return (
    <div className="home" style={{ backgroundColor: them }}>
      <div className="lhome" style={{ backgroundColor: them }}>
        <button onClick={() => navigate("/input")} style={{ marginLeft: 30 }}>
          Add users
        </button>
        <button className="theme" onClick={theme}>
          {btn}
        </button>
        {
          (c = datas1.map((d, index) => (
            <div
              key={d.id}
              onClick={() => gecid(d.id)}
              className="users"
              style={{ backgroundColor: them }}
            >
              <img src={d.images[index]} className="userimages" />

              <div className="lhead" style={{ backgroundColor: them }}>
                <h6 style={{ color: "orangered", backgroundColor: them }}>
                  {d.date}
                </h6>
                <h1 style={{ color: "lime", backgroundColor: them }}>
                  {d.user}
                </h1>
                <h2 style={{ backgroundColor: them }}>
                  {d.caption.length <= 10
                    ? d.caption
                    : `${d.caption.slice(0, 25)}...`}
                </h2>
              </div>

              {setsimage(d.images[index])}
            </div>
          )))
        }
      </div>
    </div>
  );
}
