let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P15,
    DigitalPin.P16,
    PingUnit.Centimeters
    )
    if (distance >= 0 && distance <= 5) {
        pins.servoWritePin(AnalogPin.P0, 90)
        music.playTone(392, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Yes)
        basic.pause(2000)
    } else {
        basic.pause(500)
        basic.showIcon(IconNames.No)
    }
})
