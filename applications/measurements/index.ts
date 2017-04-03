
import { DeviceService } from "./services/device.service";
import { SerialPortConnector } from "./connectors/serialPort.connector";
import { AppConstants } from "./app.constants";

export function main() {
    console.log('Initialization of measurements application');
    let connector = new SerialPortConnector(AppConstants.SerialPort);
    let service = new DeviceService(connector);
    service.initializeConnection();
}