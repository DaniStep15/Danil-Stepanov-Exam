let createSquare = document.getElementById('createSquare')
let bonus = document.getElementById('bonus')
let deleteSquare = document.getElementById('delete')
let volume = document.getElementById('volume')
let canvas = document.getElementById('mySquare')
let heightVal = document.getElementById('height')
let widthVal = document.getElementById('width')
let ctx = canvas.getContext('2d')
let timeEvent

createSquare.addEventListener('click', () => {
  let height = document.getElementById('height').value
  let width = document.getElementById('width').value
  let xSide = document.getElementById('xSide').value
  let ySide = document.getElementById('ySide').value

  if (isNaN(height) || isNaN(width) || isNaN(xSide) || isNaN(ySide)) {
    alert('numbers only')
  } else if (height == '' || width == '' || ySide == '' || xSide == '') {
    alert('put number please')
  } else if (canvas.getContext) {
    ctx.strokeRect(xSide, ySide, width, height)
  }
  volume.value = heightVal.value * widthVal.value
})

bonus.addEventListener('click', () => {
  height = 1
  width = 1
  timeEvent = setInterval(function () {
    ctx.strokeRect(0, 0, height++, width++)
  }, 30)
})

deleteSquare.addEventListener('click', () => {
  ctx.clearRect(0, 0, 300, 300)
  clearTimeout(timeEvent)
})
