
export const next = () => {
  return {
    type: 'NEXT',
  }
}

export const prev = () => {
  return {
    type: 'PREV',
  }
} 

export const selector = show => {
  return {
    type: 'SELECTOR',
    show  
  }
}

export const updateCurrent = () => {
  return {
    type: 'UPDATECURRENT',
    //current
  }
}
