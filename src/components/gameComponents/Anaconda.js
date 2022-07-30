import { useState } from "react";
 import Snake from "./Snake";
 
 
 const Anaconda = () => {
  const [snakeDots, setSnakeDots] = useState({
    snakeDot: [
      [0,0],
      [2,0]
    ]
  });
    
     return (
      <>
      <div className="animation_box">
        <div className="game--box">
          <Snake snakeDots={snakeDots.snakeDot}/>
        </div>
      </div>
      </>
    );
  }
  export default Anaconda;