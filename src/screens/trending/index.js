import React, {useState} from "react";
import Typewriter from "typewriter-effect";
import "./trending.css";

const Trending = () => {

  const [state] = useState({
    title: "Assalamualaikum,",
    titleTwo: "Perkenalkan Saya,",
    titleThree: "Muhammad Ghulam Abdul Nashr UDP",
    image: "image/sp.png",
  });
  return(
    <div className="trending">
      <div className="trending-intro">
        <h2>
          <div className="title">{state.title}</div>
          <div className="titleTwo">{state.titleTwo}</div>
          <div className="titleThree">{state.titleThree}</div>
        </h2>
        <div className="text">
          <Typewriter
          options={{
            autoStart: true,
            loop:true,
            delay: 40,
            strings:[
              "Tekkom 2020",
              "21120120120029",
              "PRAKTIKUM PPB"
            ],
          }}/>
        </div>
      </div>
      <div className="trending-image">
        <img className="sp-image" src={state.image} alt="sp"/>
      </div>
    </div>
  );
};

export default Trending;