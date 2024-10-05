import { useNavigate } from "react-router-dom";
import Dc from "./dc";
import Update from "./update";
import Header from "./header";
import Footer from "./footer";
import Nav from "./nav";
export default function Display({ capt, suser, imgp, simage, them }) {
  const navigate = useNavigate();
  console.log(capt);
  return (
    <>
      <Nav />
      <div className="display" style={{ backgroundColor: them }}>
        <div className="fcont" style={{ backgroundColor: them }}>
          <img
            src={simage}
            className="image"
            style={{ backgroundColor: them }}
          />
          <h1 style={{ color: "rebeccapurple", backgroundColor: them }}>
            {suser}
          </h1>
          <h1 style={{ color: "red", backgroundColor: them }}>{capt}</h1>
        </div>

        <button
          onClick={() => {
            navigate("/dc");
          }}
          className="btn1"
        >
          delete
        </button>
        <button
          onClick={() => {
            navigate("/update");
          }}
        >
          update
        </button>
        <div className="dimage" style={{ backgroundColor: them }}>
          {imgp.map((i, index) => (
            <div key={index} style={{ backgroundColor: them }}>
              <img src={i} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
