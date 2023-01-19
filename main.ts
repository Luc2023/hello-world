input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . . # # .
        . . . . .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(randint(0, 10))
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    rps = randint(1, 3)
    if (rps == 1) {
        basic.showString("R")
    } else if (rps == 2) {
        basic.showString("P")
    } else {
        basic.showString("S")
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.playMelody("A F D F B E C B ", 1200)
})
let rps = 0
basic.showIcon(IconNames.Asleep)
