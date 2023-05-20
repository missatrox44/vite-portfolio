import React from "react";

import landingImg from "/landing_img.svg";
// import landingImg from '../../assets/seb-logo.svg';

export default function Home() {
  return (
    <div id="home">
      <img class="object-cover large-logo" src={landingImg} />
    </div>
  );
}
