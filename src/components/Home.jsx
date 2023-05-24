import React from "react";

// import landingImg from "/landing_img.svg";
import landingImg from "/logo.svg";


export default function Home() {
  return (
    <div id="home">
      <img className="w-full mt-20 mb-40 px-10" src={landingImg} alt="Landing" />
    </div>
  );
}
