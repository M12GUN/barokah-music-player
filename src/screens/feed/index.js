import React, {useState} from "react";
import Typewriter from "typewriter-effect";
import "./feed.css";

const Feed = () => {

  const [state] = useState({
    title: "Assalamualaikum,",
    titleTwo: "Selamat datang di aplikasi barokah music player,",
    titleThree: "Selamat menggunakan and keep enjoy :)",
    image: "image/roger.png",
  });
  return(
    <div className="feed">
      <div className="feed-intro">
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
              "Bismillah",
              "ACC",
              "biar tidur tenang"
            ],
          }}/>
        </div>
      </div>
      <div className="feed-image">
        <img className="roger-image" src={state.image} alt="roger"/>
      </div>
    </div>
  );
};

export default Feed;