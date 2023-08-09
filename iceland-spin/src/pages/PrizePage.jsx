import { useState } from 'react';
import './PrizePage.css';

const PrizePage = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const prizes = [
    "Free Item",
    "50% Discount",
    "10% Discount",
    "Try Again",
    "25% Discount",
    "20% Discount",
    "15% Discount",
    "5% Discount",
  ];

  const spinWheel = () => {
    if (!spinning) {
      const randomIndex = Math.floor(Math.random() * prizes.length);
      const spinDuration = 3000; // 3 seconds
      
      setSpinning(true);
      setResult(null);
      
      setTimeout(() => {
        setResult(prizes[randomIndex]);
        setSpinning(false);
      }, spinDuration);
    }
  };

  return (
    <div className="prize-page">
      <div className={`wheel ${spinning ? 'spinning' : ''}`} onClick={spinWheel}>
        <div className="wheel-inner">
          <div className="wheel-section">
            {prizes.map((prize, index) => (
              <div className={`section-${index}`} key={index}>
                {prize}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="result">
        {spinning ? 'Spinning...' : result}
      </div>
    </div>
  );
};

export default PrizePage;
