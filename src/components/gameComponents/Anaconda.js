import { useState } from "react";
import Snake from "./Snake";
import Food from "./Food";
 
const getRandom = () => {
  let min = 1;
  let max = 98;

  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  return [x,y];
}
 
 const Anaconda = () => {
  const [snakeDots, setSnakeDots] = useState({
    snakeDot: [
      [0,0],
      [2,0]
    ]
   });

   const [foods, setFood] = useState({
    food: getRandom()
   });


    
     return (
      <>
      <div className="animation_box">
        <div className="game--box">
          <Snake snakeDots={snakeDots.snakeDot}/>
          <Food foodDots={foods.food}/>
        </div>
      </div>
      </>
    );
  }
  export default Anaconda;