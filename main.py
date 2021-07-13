def on_forever():
    pass
basic.forever(on_forever)
def on_button_pressed_a():
    basic.show_number(6)
input.on_button_pressed(Button.A, on_button_pressed_a)
led.plot(1, 0)
maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)