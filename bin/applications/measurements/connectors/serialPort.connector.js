"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SerialPort = require("serialport");
class SerialPortConnector {
    constructor(portName) {
        this.port = new SerialPort(portName, {
            baudRate: 9600
        });
        this.port.on('open', function () {
            console.log("Port connected");
        });
    }
    onDataReceived(dataReceivedFunction) {
        this.port.on("data", function (data) { console.log(data.toString()); dataReceivedFunction(data); });
    }
}
exports.SerialPortConnector = SerialPortConnector;
//# sourceMappingURL=serialPort.connector.js.map