import { MeasurementsModel } from '../models/measurement.model'
import { JSONParser } from "../../../generic/utils/jsonparser.util";

export class DataProcessorService {
    static dataBuffor: string ='';
    static dataSendToBuffer(data:string){
        DataProcessorService.dataBuffor += data.toString();    
    }
    static onTimerBuffer(time: number, dataReceivedEvent: (agregateData: MeasurementsModel) => void) {
        let tmpDataBuffor =  JSONParser.parseJsonFormat(DataProcessorService.dataBuffor.toString());
        DataProcessorService.dataBuffor = '';
        dataReceivedEvent(DataProcessorService.countTimespanDataValue(tmpDataBuffor));
        setTimeout(()=> DataProcessorService.onTimerBuffer(time, dataReceivedEvent),time);
    }
    private static countTimespanDataValue(tmpDataBuffor:any[]): MeasurementsModel {
        return {
            timestamp: Date.now(),
            msgType: 'variables_native',
            variables:DataProcessorService.searchRandomValue(tmpDataBuffor)
        }
    }
    private static searchRandomValue(values:any[]){
        return values[Math.floor(Math.random()*values.length)];
    }
}