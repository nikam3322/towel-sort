module.exports = function towelSort (matrix) {
  let arr = [];
    if (matrix === undefined) {
    return arr
  }
  for (let i = 0; i < matrix.length; i++){
    if (i % 2 !== 0){
      matrix[i].reverse()
    }
    for(let n = 0; n < matrix[i].length; n++) {
      arr.push(matrix[i][n])
    }
  }
  return arr;
}
