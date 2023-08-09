/*
- List of prizes in array
- Randomly select prize from array
- Display prize
- Add prize item to checkout list
*/
import "./PrizePage.css";
import { useState, useEffect} from "react";


export default function PrizePage({ prize, setPrize }) {
	
	

  const Wheel = (data) => {

    const [rotation, setRotation] = useState(0);
    
    const segmentSize = 360 / data.data.length;
 
    
    const handleSpin = () => {

        let random = Math.floor(Math.random() * data.data.length);

        console.log(random);
        
        let name = data.data[random].name;
  
        setPrize(name);
        console.log(name)
  
      // const randomNumber = Math.ceil(Math.random() * 10000);
      setRotation(segmentSize * random);
  
      console.log(rotation);
 
    };
    
    useEffect(() => {
      // Update the rotation on each change
      const wheelElement = document.querySelector(".container");
      wheelElement.style.transform = `rotate(${rotation}deg)`;
    }, [rotation]);

    return (
      <div>
        <title>Lucky Spin</title>
        <div className="container" onClick={handleSpin}>
          {data.data.map((item) => (
            <div className={item.class} key={item.key}>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <span className="mid"></span>
          {/* <button onClick={handleSpin} >Choose Random Prize</button> */}
          <div className="stoper"></div>
        
      </div>
    );
  };
  
  const data = [
    { name: "Vegan Ice Cream", type: "item", discount: 0, key: 1, class:"one", },
    { name: "5% off", type: "discount", discount: 5, key: 2, class:"two" },
    { name: "£10 off", type: "discount", discount: 10, key: 3, class:"three"},
    { name: "£20 off", type: "discount", discount: 20, key: 4, class:"four"},
    { name: "10% off", type: "discount", discount: 0.1, key: 5, class:"five"},
    { name: "£5 off", type: "discount", discount: 5, key: 6, class:"six"},
  ];
  

	return (
		<>
		
			<h1>{prize}</h1>
      <Wheel data={data}/>
		</>
	);
}
