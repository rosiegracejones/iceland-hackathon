import { useState } from 'react';
import './PrizePage.css';

const PrizePage = () => {
  const [rotation, setRotation] = useState(0);

  const handleSpin = () => {
    const randomNumber = Math.ceil(Math.random() * 10000);
    setRotation(rotation + randomNumber);
  };

  return (
    <div>
      <title>Lucky Spin</title>
      <body>
        <div className="container"  onClick={handleSpin} style={{ transform: `rotate(${rotation}deg)` }}>
          <div className="one">Like</div>
          <div className="two">Comment</div>
          <div className="three">Share</div>
          <div className="four">Subscribe</div>
          <div className="five">Support</div>
          <div className="six">Visit</div>
        </div>
        <span className="mid"></span>
        <button id="spin" onClick={handleSpin}>
          Spin
        </button> 
        <div className="stoper"></div>
      </body>
    </div>
  );
};

export default PrizePage;
