import React from 'react'
import ReactDOM from 'react-dom'

export class Frame extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="scoreboard__frame frame">
        {this.props.frameTotals[this.props.idx]}
        <div className="frame__bowl-scores">
          <div className="frame__first-bowl">{this.props.frame[0]}</div>
          <div className="frame__second-bowl">{this.props.frame[1]}</div>
        </div>
      </div>
    )
  }
}
