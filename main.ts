input.onButtonPressed(Button.A, function () {
    init_speed = 50
    for (let index = 0; index < 205; index++) {
        init_speed += 1
        basic.pause(5)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, init_speed)
    }
    for (let index = 0; index < 4; index++) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        basic.pause(360)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, init_speed)
        basic.pause(1200)
    }
    maqueen.motorStop(maqueen.Motors.All)
})
let init_speed = 0
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.forever(function () {
	
})
