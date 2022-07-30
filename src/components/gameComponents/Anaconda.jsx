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
    const [board, setBoard] = useState(createBoard(BOARDSIZE));
    const [snakeCells, setSnakeCells] = useState(new Set([44]));
    const [snake, setSnake] = useState(new SinglyLinkedList(44));

     return (
      <>
      <div className="animation_box game--box">
        <div className="board">
        {board.map((row, rowIdx) => (
          <div key={rowIdx} className="row">
           {
            row.map((cellValue, cellIdx) => (
              <div key={cellIdx} 
              className={`cell ${snakeCells.has(cellValue) ? 'snake-cell' : '' }`}></div>
            ))
           } 
          </div>
        ))}
      </div>
      </div>
      </>
    );
  }

  const createBoard = BOARDSIZE => {
    let counter = 1;
    const board = [];
    for (let row = 0; row < BOARDSIZE; row++)
    {
      const currentRow = [];
      for(let col = 0; col < BOARDSIZE; col++)
      {
        currentRow.push(counter++);
      }
      board.push(currentRow);
    }
    return board;
  }

  export default Anaconda;