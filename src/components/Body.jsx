import React from 'react';


import landingImg from '../assets/landing_img.svg';
// import landingImg from '../../assets/seb-logo.svg';

export default function Body(){
  return (
    <body>
      <img class='object-cover large-logo' src={landingImg} />
    </body>
  )
}