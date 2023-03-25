kitronik_VIEW128x64.controlDisplayOnOff(kitronik_VIEW128x64.onOff(true))
kitronik_VIEW128x64.writeImageDouble(kitronik_VIEW128x64.matrix16x16(`
    # . . . . . . # # . . . . . . #
    . # . . . . # . . # . . . . # .
    . . # . . # . . . . # . . # . .
    . . . # # . . . . . . # # . . .
    . . . # # . . . . . . # # . . .
    . . # . . # . . . . # . . # . .
    . # . . . . # . . # . . . . # .
    # . . . . . . # # . . . . . . #
    # . . . . . . # # . . . . . . #
    . # . . . . # . . # . . . . # .
    . . # . . # . . . . # . . # . .
    . . . # # . . . . . . # # . . .
    . . . # # . . . . . . # # . . .
    . . # . . # . . . . # . . # . .
    . # . . . . # . . # . . . . # .
    # . . . . . . # # . . . . . . #
    `), 10, 15)
kitronik_VIEW128x64.refresh()
basic.forever(function () {
	
})
