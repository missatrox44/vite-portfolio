import React from "react";

import landingImg from "/landing_img.svg";
// import landingImg from "/seb-logo.svg";

export default function Home() {
  return (
    <div id="home">
      <img className="w-full" src={landingImg} alt="Landing" />
    </div>
  );
}
