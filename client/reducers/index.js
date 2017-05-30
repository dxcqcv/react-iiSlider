const goto = (state = {current:1,show:2,moveNow:false}, action) => {
  switch(action.type) {
    case 'SELECTOR':
      return Object.assign({},state,{
        show:action.show,
        moveNow: true
      })
    case 'NEXT':
      return Object.assign({},state,{
        show:state.show == 4 ? 1 :state.show+1,
        moveNow: true
      })
    case 'PREV':
      return Object.assign({},state,{
        show:state.show == 1 ? 4 :state.show-1,
        moveNow: true
      })
    case 'UPDATECURRENT':
      return Object.assign({},state,{
        current: action.current,
        moveNow:false 
      })
    default:
      return state
  }
}

export default goto 
