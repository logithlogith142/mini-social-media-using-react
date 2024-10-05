import { useNavigate } from "react-router-dom";

export default function Buttons({ bmw, them }) {
  const navigate = useNavigate();
  return (
    <div className="missing" style={{ backgroundColor: them }}>
      <h1 style={{ backgroundColor: them }}>
        Oop this page is not respond !!!
      </h1>
      <button
        onClick={() => {
          navigate("/post");
        }}
      >
        Home page
      </button>
    </div>
  );
}
