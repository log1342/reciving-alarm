input.onButtonPressed(Button.A, function () {
    music.stopMelody(MelodyStopOptions.All)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Robber") {
        for (let index = 0; index < 2108; index++) {
            music.playMelody("C5 - C5 - C5 - C5 - ", 400)
        }
    }
})
radio.setGroup(42)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
