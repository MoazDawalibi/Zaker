import React from 'react';
import SwipeScreenShoot from '../components/SwiperScreenShoot';

import { ScreenShoot as ScreenShootData } from '../../data.json';

const ScreenShoot = () => {
  return (
    <div className="ScreenShoot" id="screen_shoot">
      <h1> {ScreenShootData.title} </h1>
      <p>{ScreenShootData.description}</p>

      <SwipeScreenShoot />
    </div>
  );
};

export default ScreenShoot;
