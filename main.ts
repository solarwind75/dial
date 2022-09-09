input.onButtonPressed(Button.A, function () {
    if (numberPosition <= 3) {
        dialInput = Math.trunc(pins.analogReadPin(AnalogPin.P0) / 103)
        enteredCodeArray[numberPosition] = dialInput
        numberPosition += 1
    }
    if (numberPosition >= 4) {
        numberPosition = 0
        enteredCode = enteredCode + enteredCodeArray[3]
        enteredCode = enteredCode + enteredCodeArray[2] * 10
        enteredCode = enteredCode + enteredCodeArray[1] * 100
        enteredCode = enteredCode + enteredCodeArray[0] * 1000
        if (enteredCode == secretCode) {
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showIcon(IconNames.No)
        }
        enteredCode = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(enteredCodeArray[0])
    basic.showNumber(enteredCodeArray[1])
    basic.showNumber(enteredCodeArray[2])
    basic.showNumber(enteredCodeArray[3])
})
let enteredCodeArray: number[] = []
let enteredCode = 0
let secretCode = 0
let numberPosition = 0
let dialInput = 0
dialInput = 0
numberPosition = 0
secretCode = 1204
enteredCode = 0
enteredCodeArray = [
0,
0,
0,
0
]
basic.forever(function () {
    basic.showNumber(Math.trunc(pins.analogReadPin(AnalogPin.P0) / 103))
})
