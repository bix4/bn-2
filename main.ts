basic.showIcon(IconNames.StickFigure)
radio.setGroup(123)
basic.forever(function () {
    radio.sendValue("X", input.acceleration(Dimension.X))
})
