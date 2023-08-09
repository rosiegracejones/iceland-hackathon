/*
- List of prizes in array
- Randomly select prize from array
- Display prize
- Add prize item to checkout list

*/

import "./PrizePage.css";

export default function PrizePage(prize, setPrize) {
	const data = [
		{ name: "Vegan Ice Cream", type: "item", discount: 0, key: 1 },
		{ name: "£100", type: "cash", discount: 0, key: 2 },
		{ name: "Plant 20 trees", type: "item", discount: 0, key: 3 },
		{ name: "free delivery", type: "delivery", discount: 0, key: 4 },
		{ name: "10% off", type: "discount", discount: 0.1, key: 5 },
	];

	function randomItem(data) {
		let random = Math.floor(Math.random() * data.length);
		let name = data[random].name;
		console.log(name);
    setPrize(name)
		return `${name}`;
	}

	return (
		<>
			<button onClick={() => randomItem(data)}>Choose Random Prize</button>
      <h1>{prize}</h1>
		</>
	);
}
