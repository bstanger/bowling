import React from 'react'
import ReactDOM from 'react-dom'

export class Frame extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="scoreboard__frame frame">
        <div className="frame__bowl-scores">
          <div className="frame__first-bowl"></div>
          <div className="frame__second-bowl"></div>
        </div>
      </div>
    )
  }
}
