import React from 'react'
import ReactDOM from 'react-dom'
import CurrentPlay from './currentplay.jsx'
import Scoreboard from './scoreboard.jsx'

export class Game extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentPins: [1,1,1,1,1,1,1,1,1,1],
      scoreboard: []
    }
  }

  inputPinNumber(num){
    console.log(num);
  }

  render(){
    return (
      <div className="main-body">
        <CurrentPlay currentPins={this.state.currentPins} onKeypadClick={this.inputPinNumber.bind(this)} />
        <Scoreboard scoreboard={this.state.scoreboard} />
      </div>
    )
  }
}
