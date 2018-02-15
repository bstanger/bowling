import React from 'react'
import ReactDOM from 'react-dom'
import { Frame } from './frame.jsx'

export class Scoreboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      frames: [[],[],[],[],[],[],[],[],[],[]]
    }
  }

  render(){
    return (
      <section className="scoreboard">
        {this.state.frames.map( (frame, idx) =>
          <Frame frame={frame} key={idx}/>
        )}
      </section>
    )
  }
}
