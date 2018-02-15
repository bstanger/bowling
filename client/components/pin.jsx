import React from 'react'
import ReactDOM from 'react-dom'

export class Pin extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    let classToAdd = "current-play__pin";
    console.log('in pin render')
    if(this.props.pin === 0){
      console.log('Yes pin is 0')
      classToAdd += " is-hidden"
    }
    return (
      <div className={classToAdd}></div>
    )
  }
}
