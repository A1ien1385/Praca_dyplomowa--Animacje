import { useState } from "react";

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(value)
  {
    const node = new LinkedListNode(value);
    this.head = node;
    this.tail = node;
  }
}
 
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
              <div key={cellIdx} 
              className={`cell ${false ? 'snake-cell' : ''}`}></div>
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