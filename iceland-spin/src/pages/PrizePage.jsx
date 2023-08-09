/*
- List of prizes in array
- Randomly select prize from array
- Display prize
- Add prize item to checkout list

*/

import "./PrizePage.css";

export default function PrizePage() {
	const data = [
		{ name: "Vegan Ice Cream", key: 1 },
		{ name: "£100", key: 2 },
		{ name: "Plant 20 trees", key: 3 },
		{ name: "free delivery", key: 4 },
		{ name: "10% off", key: 5 },
	];

	function randomItem(data) {
		let random = Math.floor(Math.random() * data.length);
		let name = data[random].name;
		console.log(name);
		return name;
	}

	return (
		<>
			<button onClick={() => randomItem(data)}>Choose Random Prize</button>
		</>
	);
}
