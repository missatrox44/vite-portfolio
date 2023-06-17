import React from "react";
import landingImg from "/logo.svg";

export default function Home() {
  return (
    <div
      id="home"
      className="bg-lightDesert flex items-center justify-center min-h-screen">
      <img
        className="w-fit"
        src={landingImg}
        alt="Trumpet with tentacle logo"
      />
    </div>
  );
}
