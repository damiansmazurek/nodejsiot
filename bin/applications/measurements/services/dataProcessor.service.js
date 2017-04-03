"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataProcessorService {
    static dataSendToBuffer(data) {
        console.log('Saving data');
        DataProcessorService.dataBuffor += data.toString();
    }
    static onTimerBuffer(time, dataReceivedEvent) {
        console.log(DataProcessorService.dataBuffor);
        //var tmpDataBuffor =  JSONParser.parseJsonFormat(DataProcessorService.dataBuffor.toString());
        //console.log(tmpDataBuffor);
        dataReceivedEvent(null);
        setTimeout(() => DataProcessorService.onTimerBuffer(time, dataReceivedEvent), time);
    }
    static countTimespanDataValue(time) {
        return {
            timestamp: Date.now(),
            msgType: 'variables',
            variables: {
                x: 0, y: 1, z: 2
            }
        };
    }
}
DataProcessorService.dataBuffor = '';
exports.DataProcessorService = DataProcessorService;
//# sourceMappingURL=dataProcessor.service.js.map