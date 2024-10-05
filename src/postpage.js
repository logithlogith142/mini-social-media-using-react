import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Input from "./input";
import Home from "./home";
import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "./nav";

export default function Post({
  setid,
  gecid,
  setsimage,
  setlen,
  color3,
  theme,
  them,
  btn,
}) {
  console.log(btn);
  const [datas1, setdatas1] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    get1();
  }, []);
  const get1 = async () => {
    try {
      const response = await axios.get("http://localhost:3003/datas");
      setdatas1(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  setid(datas1.length);
  console.log(datas1.length);
  setlen(datas1.length);
  return (
    <>
      <Nav />
      <div className="post" style={{ backgroundColor: them }}>
        {datas1.length ? (
          <Home
            datas1={datas1}
            gecid={gecid}
            setsimage={setsimage}
            color3={color3}
            theme={theme}
            them={them}
            btn={btn}
          />
        ) : (
          <>
            <h1 className="h1" style={{ backgroundColor: them }}>
              No users here
            </h1>

            <button
              style={{ backgroundColor: them }}
              onClick={() => navigate("/input")}
              className="lbutton"
            >
              Add users
            </button>
          </>
        )}
      </div>
    </>
  );
}
