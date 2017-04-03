"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonparser_util_1 = require("../../../generic/utils/jsonparser.util");
class DataProcessorService {
    static dataSendToBuffer(data) {
        DataProcessorService.dataBuffor += data.toString();
    }
    static onTimerBuffer(time, dataReceivedEvent) {
        let tmpDataBuffor = jsonparser_util_1.JSONParser.parseJsonFormat(DataProcessorService.dataBuffor.toString());
        DataProcessorService.dataBuffor = '';
        dataReceivedEvent(DataProcessorService.countTimespanDataValue(tmpDataBuffor));
        setTimeout(() => DataProcessorService.onTimerBuffer(time, dataReceivedEvent), time);
    }
    static countTimespanDataValue(tmpDataBuffor) {
        return {
            timestamp: Date.now(),
            msgType: 'variables_native',
            variables: DataProcessorService.searchRandomValue(tmpDataBuffor)
        };
    }
    static searchRandomValue(values) {
        return values[Math.floor(Math.random() * values.length)];
    }
}
DataProcessorService.dataBuffor = '';
exports.DataProcessorService = DataProcessorService;
//# sourceMappingURL=dataProcessor.service.js.map