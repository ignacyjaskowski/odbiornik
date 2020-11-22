radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        n = n + 1
        powerfunctions.setSpeed(PowerFunctionsMotor.Red1, n)
    } else if (receivedNumber == 1) {
        a = a - 1
    } else if (receivedNumber == 2) {
    	
    }
})
let a = 0
let n = 0
powerfunctions.connectIrLed(AnalogPin.P0)
