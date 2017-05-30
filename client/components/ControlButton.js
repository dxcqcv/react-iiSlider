
import React from 'react'
const ControlButton = ({onClick, dir}) => (
  <span
    onClick = {onClick} 
  >
    {dir} 
  </span>
) 

//class ControlButton extends React.Component {
  //constructor(props) {
    //super(props);
  //}
  //componentWillReceiveProps(NextProps) {
    //console.log(`componentWillReceiveProps ${NextProps.state}, `)
  //}
  //render() {
    //return (
      //<span
        //onClick = {()=>{this.props.onClick();console.log(`${this.props.dir} ${this.props.state}`)}} 
      //>
        //{this.props.dir} 
      //</span>
    //)
  //}
//}

export default ControlButton
