import React from 'react'
import ReactDOM from 'react-dom'
import CurrentPlay from './currentplay.jsx'
import { Scoreboard } from './scoreboard.jsx'

export class Game extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentPins: [1,1,1,1,1,1,1,1,1,1], // Could be moved to alley?
      currentFrameBallsLeft: 2,
      currentRoll: 0
    }
  }

  inputPinNumber(num){
    let pinsToRemove = num.idx;
    let pinsRemoved = 0;
    let currPinsCopy = this.state.currentPins.slice();
    for(var i = 0; i < currPinsCopy.length; i++){
      if(currPinsCopy[i] === 1){
        currPinsCopy[i] = 0;
        ++pinsRemoved;
        if(pinsRemoved === (num.idx)){
          break;
        }
      }
    }
    this.updatePinsAfterBowl(currPinsCopy);
  }

  updatePinsAfterBowl(newPins){
    this.setState(
      {currentPins: newPins,
      currentFrameBallsLeft: this.state.currentFrameBallsLeft - 1},
      () => {
        console.log('State updated!');
        setTimeout(() => {
          if(this.state.currentFrameBallsLeft === 0){
            this.resetCurrentFrame();
          }
        }, 1000);
      }
    )
  }

  resetCurrentFrame(){
    console.log('resetting frame');
    this.setState(
      {currentFrameBallsLeft: 2,
      currentPins: [1,1,1,1,1,1,1,1,1,1]}
    )
  }

  render(){
    return (
      <div className="main-body">
        <CurrentPlay currentPins={this.state.currentPins} onKeypadClick={this.inputPinNumber.bind(this)} />
        <Scoreboard currentRoll={this.state.currentRoll} />
      </div>
    )
  }
}
