import React from 'react';
import './body.css';

import landingImg from '../../assets/landing_img.svg';
// import landingImg from '../../assets/seb-logo.svg';

export default function Body(){
  return (
    <body>
      <img class='object-cover' src={landingImg} />
    </body>
  )
}