import React from "react";
import landingImg from "/logo.svg";

export default function Home() {
  return (
    <div id="home" className="bg-lightDesert py-12 px-8">
      <img
        className="w-full mt-12"
        src={landingImg}
        alt="Trumpet with tentacle logo"
      />
    </div>
  );
}
