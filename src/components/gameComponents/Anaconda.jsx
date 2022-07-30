import { useState } from "react";
 
 
 
 const Anaconda = () => {
  const [snakeDots, setSnakeDots] = useState([0,0], [2,0]);
    
     return (
      <>
      <div className="animation_box">
        <div className="game--box">
          <div className="snake-dot" style={{top: 0, left: 0}}></div>
          <div className="snake-dot" style={{top: 0, left: '2%'}}></div>
          <div className="snake-dot" style={{top: 0, left: '4%'}}></div>
        </div>
      </div>
      </>
    );
  }
  export default Anaconda;