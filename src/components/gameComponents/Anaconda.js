import { useState, useEffect } from "react";
import Snake from "./Snake";
import Food from "./Food";
 
const getRandomFoodLocation = () => {
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
    food: getRandomFoodLocation()
   });

   const [direction, setDirection] = useState({direction: "RIGHT"});
  


   useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
  
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

   
   const onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode)
    {
      case 38:
        setDirection({direction: "UP"});
       break; 
       case 40:
        setDirection({direction: "DOWN"});
       break; 
       case 37:
        setDirection({direction: "LEFT"});
       break; 
       case 39:
        setDirection({direction: "RIGHT"});
       break; 
    }
   }

   

  
    
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