"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataProcessor_service_1 = require("./dataProcessor.service");
const message_emitter_1 = require("../../../generic/messaging/emmiter/message.emitter");
class DeviceService {
    constructor(serialPort) {
        this.serialPort = serialPort;
    }
    initializeConnection() {
        this.serialPort.onDataReceived(dataProcessor_service_1.DataProcessorService.dataSendToBuffer);
        dataProcessor_service_1.DataProcessorService.onTimerBuffer(20000, (data) => {
            console.log(data);
            message_emitter_1.MessageEmitter.Instance.push(data);
        });
    }
}
exports.DeviceService = DeviceService;
//# sourceMappingURL=device.service.js.map