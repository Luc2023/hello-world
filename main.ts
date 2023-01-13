input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Silly)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Asleep)
})
music.playSoundEffect(music.createSoundEffect(
WaveShape.Sine,
5000,
0,
255,
0,
500,
SoundExpressionEffect.None,
InterpolationCurve.Linear
), SoundExpressionPlayMode.InBackground)
