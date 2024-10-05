import { useEffect, useState } from "react";
import Display from "./display";
import axios from "axios";
import Buttons from "./btn";
import { Route, Routes } from "react-router-dom";
export default function Feed({ id, user, get }) {
  const [idget, setidget] = useState("");

  const show = async (id) => {
    const c = await axios.get(`http://localhost:3003/datas/${id}`);
    setidget(c.data);
  };
  const del = () => {
    axios.delete(`http://localhost:3003/datas/${idget.id}`);
  };

  return <></>;
}
/* <Display user={idget.user} pass={idget.password} />
      <Buttons del={del} />*/
