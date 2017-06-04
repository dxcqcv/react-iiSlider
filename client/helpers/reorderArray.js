
export default function reorderArray(arr, oldIdx, newIdx) {
  // arr must be array
  if(arr.constructor !== Array) return
  // copy a new Array
  const copiedArr = [...arr] 
  // if idx is negative make it positive
  while(oldIdx < 0) oldIdx += copiedArr.length 
  while(newIdx < 0) newIdx += copiedArr.length 
  //if newIdx is greater than length, push undefined to that position
  if(newIdx >= copiedArr.length) {
    let k = newIdx - copiedArr.length
    while((k--)+1) copiedArr.push(undefined)
  }
  copiedArr.splice(newIdx, 0, copiedArr.splice(oldIdx, 1)[0]) 
  return copiedArr
}
