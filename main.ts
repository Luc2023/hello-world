input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 E A D G B E C5 ", 1250)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.Shake, function () {
	
})
music.playMelody("B F B A B F C F ", 5000)
