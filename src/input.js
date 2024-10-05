import { Link, useNavigate } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Nav from "./nav";
const Input = ({
  add,
  setpass,
  setuser,
  setcapt,
  color2,
  error,
  setcolor,
  color,
  them,
}) => {
  if (error === "Loading...") {
    setcolor("black");
  } else {
    setcolor("red");
  }
  return (
    <>
      <Nav />
      <div className="input" style={{ backgroundColor: them }}>
        <label style={{ backgroundColor: them }}>
          Name :
          <input
            type="text"
            onChange={(e) => {
              setuser(e.target.value);
            }}
            className="newPostForm textarea "
            style={{ borderBottomColor: color2, backgroundColor: them }}
          />
        </label>
        <label style={{ backgroundColor: them }}>
          Password :
          <input
            type="text"
            onChange={(e) => {
              setpass(e.target.value);
            }}
            className="newPostForm textarea"
            style={{ borderBottomColor: color2, backgroundColor: them }}
          />
        </label>
        <label style={{ backgroundColor: them }}>
          Caption :
          <textarea
            type="text"
            onChange={(e) => {
              setcapt(e.target.value);
            }}
            className="newPostForm textarea"
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
        <button onClick={add} className="newPostForm button ">
          Add
        </button>
      </div>
    </>
  );
};
export default Input;
