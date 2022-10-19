import React from 'react';
import './body.css';

import landingImg from '../../assets/landing_img.svg'

export default function Body(){
  return (
    <body>
      <img className="centerPage" src={landingImg} />
    </body>
  )
}