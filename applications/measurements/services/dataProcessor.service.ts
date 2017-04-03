import { MeasurementsModel } from '../models/measurement.model'
import { JSONParser } from "../../../generic/utils/jsonparser.util";

export class DataProcessorService {
    static dataBuffor: string ='';
    static dataSendToBuffer(data:string){
        console.log('Saving data');
        DataProcessorService.dataBuffor += data.toString();    
    }
    static onTimerBuffer(time: number, dataReceivedEvent: (agregateData: MeasurementsModel) => void) {
        console.log(DataProcessorService.dataBuffor);
        //var tmpDataBuffor =  JSONParser.parseJsonFormat(DataProcessorService.dataBuffor.toString());
        //console.log(tmpDataBuffor);
        dataReceivedEvent(null);
        setTimeout(()=> DataProcessorService.onTimerBuffer(time, dataReceivedEvent),time);
    }
    private static countTimespanDataValue(time): MeasurementsModel {
        return {
            timestamp: Date.now(),
            msgType: 'variables',
            variables: {
                x: 0, y: 1, z: 2
            }
        }
    }
}