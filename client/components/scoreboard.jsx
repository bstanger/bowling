import React from 'react'
import ReactDOM from 'react-dom'
import { Frame } from './frame.jsx'

export class Scoreboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      frames: [[],[],[],[],[],[],[],[],[],[]],
      frameTotals: []
    }
  }

  componentWillReceiveProps(nextProps) {
    // Don't update if just changed current pins
    if(nextProps.currentFrameBallsLeft === this.props.currentFrameBallsLeft){
      return;
    }
    let framesCopy = this.state.frames.slice();
    let currentFrameTuple = framesCopy[this.props.currentFrame];
    if(currentFrameTuple.length < 2){ // Should use better tactic than this
      currentFrameTuple.push(nextProps.currentBowl);
    }
    this.setState({ frames: framesCopy });
  }


  render(){
    return (
      <section className="scoreboard">
        {this.state.frames.map( (frame, idx) =>
          <Frame frame={frame} key={idx} idx={idx} frameTotals={this.state.frameTotals}/>
        )}
      </section>
    )
  }
}
