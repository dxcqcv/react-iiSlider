import reorderArray from '../helpers/reorderArray.js'


const goto = (state = {/*current:1,*/show:1,moveNow:false, sliders:[4,1,2,3],distance: 0}, action) => {
  switch(action.type) {
    case 'SELECTOR':
      return Object.assign({},state,{
        show:action.show,
        get distance() {
          if(this.show === this.sliders[1]) return 0
          if(this.show > this.sliders[1]) return 800
          else return -800
        },
        get sliders(){
          return prepareSliders(state)
        },
        moveNow: true
      })
    case 'NEXT':
      return Object.assign({},state,{
        show:++state.show > 4 ? 1 :state.show,
        get distance() {return 800},
        get sliders(){
          return prepareSliders(state)
        },
        moveNow: true
      })
    case 'PREV':
      return Object.assign({},state,{
        show:--state.show < 1 ? 4 :state.show,
        get distance() {return -800},
        get sliders(){
          return prepareSliders(state)
        },
        moveNow: true
      })
    case 'UPDATECURRENT':
      return Object.assign({},state,{
        get distance() {return 0},
        get sliders() {
          if (state.moveNow !== false) {
            if(state.show > state.sliders[1]) {
              return reorderArray(state.sliders, state.sliders[1], 0 )
            } else {
              return reorderArray(state.sliders, state.sliders[1], state.sliders.length-1 )
            }
          } 
        },
        //current: action.current,
        moveNow:false 
      })
    default:
      return state
  }
}

function prepareSliders(state) {
  return (state.show > state.sliders[1]) 
    ? reorderArray(state.sliders, state.show, 2) 
    : reorderArray(state.sliders, state.show, 0)
}
export default goto 
