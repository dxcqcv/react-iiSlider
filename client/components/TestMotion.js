import React,{Component} from 'react'
import { Motion, spring } from 'react-motion'

export default class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      distance: 0
    }
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleTouchStart = this.handleTouchStart.bind(this)
    this.handleEnd = this.handleEnd.bind(this)
  }
  handleEnd() {
    this.setState({distance:0})
  }
  handleMouseDown () {
    this.setState({distance:400})
  }
  handleTouchStart (e) {
    e.preventDefault()
    this.handleMouseDown()
  }
  render() {
    return (
      <div>
        <button
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}
        >Toggle
        </button>
        <Motion key={this.state.distance} defaultStyle={{x:0}} style={{x:spring(
          this.state.distance
        )}} onRest={()=>this.handleEnd()}>
          {({x}) =>
            // children is a callback which should accept the current value of
            // `style`
            <div className="demo0">
              <div className="demo0-block"
              style={{transform: `translate3d(${x}px,0,0)`
              }}
              ></div>
            </div>
          }
        </Motion>
      </div>
    )
  }
}