import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Nav from "../../SharedUi/Nav/Nav";

// Counter
const Home = () => {
  // const [counter, setCounter] = useState(0);
  //
  // useEffect(() => {
  //   document.title = `Counter: ${counter}`;
  // }, [counter]);

  return (
    <>
      <div className="hom vh-100">
        <Nav />
      </div>
    </>
  );
};

//Export
export default Home;
