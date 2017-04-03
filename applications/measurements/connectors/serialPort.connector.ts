import * as SerialPort from 'serialport'
export class SerialPortConnector {
    private port: SerialPort;
    constructor(portName: string) {
        this.port = new SerialPort(portName, {
            baudRate: 9600
        });
        this.port.on('open', function () {
            console.log("Port connected");
        });
    }
    onDataReceived(dataReceivedFunction: (data: any) => void) {
        this.port.on("data", function (data) { dataReceivedFunction(data); });
    }
}