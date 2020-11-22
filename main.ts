radio.onReceivedNumber(function (receivedNumber) {
    loops.forLoop(1, 5, function (index) {
        powerfunctions.setSpeed(PowerFunctionsMotor.Blue1, index)
        powerfunctions.setSpeed(PowerFunctionsMotor.Red1, index)
    })
    if (receivedNumber == 0) {
        n = n + 1
        powerfunctions.setSpeed(PowerFunctionsMotor.Red1, n)
    } else if (receivedNumber == 1) {
        a = a - 1
        powerfunctions.setSpeed(PowerFunctionsMotor.Blue1, a)
    } else if (receivedNumber == 2) {
        powerfunctions.setSpeed(PowerFunctionsMotor.Red1, 0)
        powerfunctions.setSpeed(PowerFunctionsMotor.Blue1, 0)
    } else if (receivedNumber == 3) {
        n = n - 1
        powerfunctions.setSpeed(PowerFunctionsMotor.Red1, n)
    } else if (receivedNumber == 4) {
        a = a + 1
        powerfunctions.setSpeed(PowerFunctionsMotor.Blue1, a)
    }
})
let a = 0
let n = 0
powerfunctions.connectIrLed(AnalogPin.P0)
