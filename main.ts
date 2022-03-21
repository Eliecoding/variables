input.onButtonPressed(Button.A, function () {
    number += 0.5
    basic.showNumber(number)
})
input.onGesture(Gesture.TiltLeft, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    number += -0.5
    basic.showNumber(number)
})
input.onGesture(Gesture.TiltRight, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let sprite: game.LedSprite = null
let number = 0
basic.showIcon(IconNames.Heart)
number = 4
let set_player = game.createSprite(2, 2)
