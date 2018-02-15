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
      currentBowl: 0,
      currentFrame: 0
    }
  }

  inputPinNumber(num){
    let pinsToRemove = num.idx;
    let pinsRemoved = 0;
    let currPinsCopy = this.state.currentPins.slice();
    if(pinsToRemove){
      for(var i = 0; i < currPinsCopy.length; i++){
        if(currPinsCopy[i] === 1){
          currPinsCopy[i] = 0;
          ++pinsRemoved;
          if(pinsRemoved === (num.idx)){
            break;
          }
        }
      }
    }
    this.updatePinsAfterBowl(currPinsCopy, pinsRemoved);
  }

  updatePinsAfterBowl(newPins, currentBowl){
    let islastBall = (this.state.currentFrameBallsLeft === 1);
    let newCurentFrame = islastBall ? (this.state.currentFrame + 1) : this.state.currentFrame;
    let newBallsLeft = islastBall ? 2 : 1;
    this.setState(
      {currentPins: newPins,
      currentFrameBallsLeft: newBallsLeft,
      currentBowl: currentBowl,
      currentFrame: newCurentFrame},
      () => {
        setTimeout(() => {
          if(islastBall){
            this.resetCurrentFrame();
          }
        }, 1000);
      }
    )
  }

  resetCurrentFrame(){
    console.log('resetting frame');
    this.setState({currentPins: [1,1,1,1,1,1,1,1,1,1] });
  }

  render(){
    return (
      <div className="main-body">
        <CurrentPlay currentPins={this.state.currentPins} onKeypadClick={this.inputPinNumber.bind(this)} />
        <Scoreboard currentBowl={this.state.currentBowl} currentFrame={this.state.currentFrame} currentFrameBallsLeft={this.state.currentFrameBallsLeft}/>
      </div>
    )
  }
}
