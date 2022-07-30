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
 
 class Anaconda extends Component {
  
  state = {
    food: getRandomFoodLocation(),
    snakeDots: [
      [0,0],
      [2,0]
    ]
  }
       render() {
        return (
          <div className="animation_box">
          <div className="game--box">
            <Snake snakeDots={this.state.snakeDots}/>
            <Food dotFood={this.state.food}/>
          </div>
          </div>
        )
       }
  }
  export default Anaconda;