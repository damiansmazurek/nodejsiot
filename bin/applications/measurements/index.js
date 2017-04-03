"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const device_service_1 = require("./services/device.service");
const serialPort_connector_1 = require("./connectors/serialPort.connector");
const app_constants_1 = require("./app.constants");
function main() {
    console.log('Initialization of measurements application');
    let connector = new serialPort_connector_1.SerialPortConnector(app_constants_1.AppConstants.SerialPort);
    let service = new device_service_1.DeviceService(connector);
    service.initializeConnection();
}
exports.main = main;
//# sourceMappingURL=index.js.map