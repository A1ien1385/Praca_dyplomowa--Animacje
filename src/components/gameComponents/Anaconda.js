import { Component } from "react";
import Snake from "./Snake";
import Food from "./Food";
 
const getRandomFoodLocation = () => {
  let min = 1;
  let max = 98;

  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  return [x,y];
}

const startingState = {
  food: getRandomFoodLocation(),
    speed: 200,
    direction: "RIGHT",
    snakeDots: [
      [10,30],
      [12,30]
    ]
}
 
 class Anaconda extends Component {
  
  state = startingState;

componentDidMount() {
  setInterval(this.moveSnake, this.state.speed);
  document.onkeydown = this.onKeyDown;
}

componentDidUpdate() {
  this.checkIfOutOfBorder();
}

onKeyDown = (e) => {
  e = e || window.event;
  switch (e.keyCode) {
    case 38:
      this.setState({direction: 'UP'});
      break;
    case 40:
      this.setState({direction: 'DOWN'});
      break;
    case 37:
      this.setState({direction: 'LEFT'});
      break;
    case 39:
      this.setState({direction: 'RIGHT'});
      break;
  }
}

moveSnake = () => {
  let dots = [...this.state.snakeDots];
  let head = dots[dots.length - 1];

  switch (this.state.direction) {
    case 'RIGHT':
      head = [head[0] + 2, head[1]];
      break;
    case 'LEFT':
      head = [head[0] - 2, head[1]];
      break;
    case 'DOWN':
      head = [head[0], head[1] + 2];
      break;
    case 'UP':
      head = [head[0], head[1] - 2];
      break;
  }
  dots.push(head);
  dots.shift();
  this.setState({
    snakeDots: dots
  })
}

checkIfOutOfBorder() {
  let head = this.state.snakeDots[this.state.snakeDots.length - 1];
  if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0)
  {
   this.onGameOver(); 
  }
}

onGameOver() {
  alert(`Game Over! You Have got: ${this.state.snakeDots.length - 2} points`);
  this.setState(startingState);
}

       render() {
        return (
          <div className="animation_box">
          <div className="game--box">
          <Snake snakeDots={this.state.snakeDots}/>
        <Food dot={this.state.food}/>
          </div>
          </div>
        )
       }
  }
  export default Anaconda;

  //6:33 minute