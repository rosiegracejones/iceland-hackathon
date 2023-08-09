/*
- List of prizes in array
- Randomly select prize from array
- Display prize
- Add prize item to checkout list
*/

const Wheel = () => {
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

import "./PrizePage.css";

export default function PrizePage({ prize, setPrize }) {
	const data = [
		{ name: "Vegan Ice Cream", type: "item", discount: 0, key: 1 },
    { name: "5% off", type: "discount", discount: 5, key: 2 },
    { name: "£10 off", type: "discount", discount: 10, key: 3 },
    { name: "£20 off", type: "discount", discount: 20, key: 4 },
		{ name: "10% off", type: "discount", discount: 0.1, key: 5 },
	];

	function randomItem(data) {
		let random = Math.floor(Math.random() * data.length);
		let name = data[random].name;
		console.log(name);
		setPrize(name);
		return `${name}`;
	}

	return (
		<>
			<button onClick={() => randomItem(data)}>Choose Random Prize</button>
			<h1>{prize}</h1>
		</>
	);
}
