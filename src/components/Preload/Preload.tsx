import React from 'react';

import preload from '../../assets/images/preload.gif';
import '../../App.css';

export const Preload = (): any => (
  <div>
    <img className="preload" src={preload} alt="" />
  </div>
);
