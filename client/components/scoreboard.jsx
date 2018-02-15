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
    let framesCopy = this.state.frames.slice();
    let currentFrameTuple = framesCopy[this.props.currentFrame];
    console.log(currentFrameTuple);
    console.log(2 - this.props.currentFrameBallsLeft);
    currentFrameTuple[2 - this.props.currentFrameBallsLeft] = nextProps.currentBowl;
    console.log('updated tuple ', currentFrameTuple);
    this.setState({
      frames: framesCopy
    })
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
