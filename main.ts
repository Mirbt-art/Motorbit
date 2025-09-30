function Repeat_x_times_anti_clockwise () {
    for (let index = 0; index < 60; index++) {
        Repeat_x_times_anti_clockwise()
        Switch_Fan_OFF()
    }
}
function Rotate_Anti_Clockwise () {
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(5)
}
function Repeat_x_times_clockwise () {
    for (let index = 0; index < 60; index++) {
        Rotate_Clockwise()
        Switch_Fan_ON()
    }
}
function Rotate_Clockwise () {
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(5)
}
input.onButtonPressed(Button.A, function () {
    Speed = Speed - 100
    Switch_Fan_ON()
    basic.showString("#")
    basic.showNumber(Speed)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Yes)
    Switch_Fan_ON()
    for (let index = 0; index < 8; index++) {
        Repeat_x_times_clockwise()
        Rotate_Anti_Clockwise()
    }
    Switch_Fan_OFF()
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    Speed = Speed - 100
    Switch_Fan_ON()
    basic.showString("#")
    basic.showNumber(Speed)
})
function Rotate_Stop () {
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(60)
}
function Switch_Fan_OFF () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function Switch_Fan_ON () {
    pins.analogWritePin(AnalogPin.P0, Speed)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
let Speed = 0
Speed = 300
basic.showNumber(Speed)
