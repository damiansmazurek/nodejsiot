"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataProcessor_service_1 = require("./dataProcessor.service");
class DeviceService {
    constructor(serialPort) {
        this.serialPort = serialPort;
    }
    initializeConnection() {
        this.serialPort.onDataReceived(dataProcessor_service_1.DataProcessorService.dataSendToBuffer);
        dataProcessor_service_1.DataProcessorService.onTimerBuffer(20000, (data) => {
            console.log(data);
        });
    }
}
exports.DeviceService = DeviceService;
//# sourceMappingURL=device.service.js.map