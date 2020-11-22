input.onPinPressed(TouchPin.P0, function () {
	
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        powerfunctions.connectIrLed(AnalogPin.P0)
    } else {
    	
    }
})
radio.sendNumber(0)
basic.forever(function () {
	
})
