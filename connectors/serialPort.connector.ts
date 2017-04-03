import * as SerialPort from 'serialport';

export class DeviceConnector {
    private port: SerialPort;
    connectToDevice(portName: string) {
        this.port = new SerialPort(portName, {
            baudRate: 9600
        });
    }
    subscribeData(dataReceivedFunction){
        this.port.on("data",  (data) => { dataReceivedFunction(data); });
    }
}