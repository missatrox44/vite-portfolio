import React from "react";

// import landingImg from "/landing_img.svg";
import landingImg from "/logo.svg";
// import landingImg from "/transparent-logo.png";


export default function Home() {
  return (
    <div id="home">
      <img className="w-full mt-12" src={landingImg} alt="Landing" />
    </div>
  );
}
