import axios from "axios";
import Post from "./postpage";
import { useState } from "react";
import bmw from "./images/bmw.jpg";
import bmw1 from "./images/bmw.png";
import image from "./images/images.jpg";
import moon from "./images/moon.jpg";
import nature from "./images/nature.jpg";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Login from "./login";
import Home from "./home";
import Input from "./input";
import Header from "./header";
import Footer from "./footer";
import Display from "./display";
import Dc from "./dc";
import Update from "./update";
import Buttons from "./btn";
import Loader from "./loader";
import Nav from "./nav";
import About from "./about";
export default function App() {
  const navigate = useNavigate();
  const [datas, setdatas] = useState([]);
  const [id, setid] = useState("");
  const [color2, setcolor2] = useState("");
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");
  const [suser, setsuser] = useState("");
  const [spass, setspass] = useState("");
  const [sid, setsid] = useState("");
  const [upin, setupin] = useState("");
  const [upin1, setupin1] = useState("");
  const [upin2, setupin2] = useState("");
  const [simage, setsimage] = useState("");
  const [capt, setcapt] = useState("");
  const [imgp, setimgp] = useState([]);
  const [len, setlen] = useState(" ");
  const [error, seterror] = useState("");
  const [error4, seterror4] = useState("");

  const [color, setcolor] = useState("");
  const [color3, setcolor3] = useState(true);
  const [them, settheme] = useState("");
  const [btn, setbtn] = useState("theme");
  const [color4, setcolor4] = useState("");

  const [img, setimg] = useState([bmw, bmw1, image, moon, nature]);
  const date = new Date();
  const theme = () => {
    setcolor3(!color3);
    if (color3 === true) {
      settheme("white");
      setbtn("light");
    } else {
      settheme("#4f4f4f");
      setbtn("dark");
    }
  };
  const cdates =
    date.toDateString() +
    "  " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();

  const get = async () => {
    try {
      const response = await axios.get("http://localhost:3003/datas");
      setdatas(response.data);
      setimgp(datas.images);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    // setid(a.data.id);
  };

  const add = () => {
    const d = JSON.stringify(id);
    console.log(d);
    seterror4(" ");
    setcolor4("orange");
    if (user && pass && capt) {
      axios
        .post("http://localhost:3003/datas", {
          id: d,
          user: user,
          password: pass,
          date: cdates,
          caption: capt,
          images: img,
        })
        .then((res) => setdatas([...datas, res.data]));

      navigate("/load");

      setTimeout(() => {
        navigate("/post");
        alert(`${user} user id is added`);
      }, 2000);
    } else {
      setcolor4("red");
      seterror4("Please fill the all Input");
    }
  };
  const gecid = async (cid) => {
    const a = await axios.get(`http://localhost:3003/datas/${cid}`);

    setsuser(a.data.user);
    setspass(a.data.caption);
    setsid(a.data.id);
    setimgp(a.data.images);
    navigate("/display");
  };

  const del = (i) => {
    axios.delete(`http://localhost:3003/datas/${i}`);
    navigate("/load");
    setTimeout(() => {
      navigate("/post");
      alert(`${user} user id is deleted`);
    }, 2000);
  };
  const upinf = async () => {
    setcolor2("orange");
    seterror(" ");
    if (upin && upin1 && upin2) {
      try {
        await axios.put(`http://localhost:3003/datas/${sid}`, {
          user: upin,
          password: upin1,
          caption: upin2,
          date: cdates,
          images: img,
        });
        navigate("/load");
        setTimeout(() => {
          navigate("/post");
          alert("your update have been updated!");
        }, 2000);
        setupin(" ");
        setupin1(" ");
      } catch (error) {
        console.error("Error fetch data");
        navigate("/*");
      }
    } else {
      setcolor2("red");
      seterror("Please fill the all Input");
    }
  };
  return (
    <div>
      <Header />

      <Routes>
        <Route
          path="/input"
          element={
            <Input
              setpass={setpass}
              setuser={setuser}
              add={add}
              setcapt={setcapt}
              error={error4}
              color={color}
              setcolor={setcolor}
              color2={color4}
              them={them}
            />
          }
        />

        <Route
          path="/post"
          element={
            <Post
              setid={setid}
              gecid={gecid}
              setsimage={setsimage}
              setlen={setlen}
              len={len}
              color3={color3}
              theme={theme}
              them={them}
              btn={btn}
            />
          }
        />
        <Route path="/" element={<Login />} />
        <Route
          path="/display"
          element={
            <Display
              capt={spass}
              suser={suser}
              imgp={imgp}
              simage={simage}
              them={them}
            />
          }
        />
        <Route path="/dc" element={<Dc del={del} sid={sid} them={them} />} />

        <Route
          path="/update"
          element={
            <Update
              setupin={setupin}
              setupin1={setupin1}
              upinf={upinf}
              setupin2={setupin2}
              error={error}
              color={color}
              setcolor={setcolor}
              color2={color2}
              them={them}
            />
          }
        />
        <Route path="/load" element={<Loader them={them} />} />
        <Route path="/*" element={<Buttons them={them} />} />
        <Route path="/about" element={<About them={them} />} />
      </Routes>

      <Footer />
    </div>
  );
} /* 
 ;*/
