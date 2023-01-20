let letter = 0
let rps = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        basic.showString("A",5)
basic.showString("B",5)
basic.showString("C",5)
basic.showString("D",5)
    }
    letter = randint(1, 4)
    if (letter == 1) {
        basic.showString("A")
    } else if (letter == 2) {
        basic.showString("B")
    } else if (letter == 3) {
        basic.showString("C")
    } else {
        basic.showString("D")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(randint(0, 10))
})
input.onButtonPressed(Button.B, function () {
	
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
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . # # .
            . . . . .
            . . # . .
            `)
    }
})
