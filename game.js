const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 1024
canvas.height = 576

ctx.fillStyle = "red"
ctx.fillRect(0, 0, canvas.width, canvas.height)

const backgroundImage = new Image()
backgroundImage.src = "./img/Pellet Town.png"

const playerImage = new Image()
playerImage.src = "./img/playerDown.png"

backgroundImage.onload = () => {
  ctx.drawImage(backgroundImage, -785, -650)
  ctx.drawImage(
    playerImage,
    canvas.width / 2 - playerImage.width / 2,
    canvas.height / 2 - playerImage.height / 2
  )
}
