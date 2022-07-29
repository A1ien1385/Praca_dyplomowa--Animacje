import { useState } from "react";

 
 const BOARDSIZE = 9;
 
 const Anaconda = () => {
    const [board, setBoard] = useState(
      new Array(BOARDSIZE).fill(0).map(row => new Array(BOARDSIZE).fill(0)),
    );

     return (
      <>
      <div className="animation_box game--box">
        <div className="board">
        {board.map((row, rowIdx) => (
          <div key={rowIdx} className="row">
           {
            row.map((cell, cellIdx) => (
              <div key={cellIdx} className="cell"></div>
            ))
           } 
          </div>
        ))}
      </div>
      </div>
      </>
    );
  }

  export default Anaconda;