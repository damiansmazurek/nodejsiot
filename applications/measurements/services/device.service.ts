import { SerialPortConnector } from '../connectors/serialPort.connector';
import { DataProcessorService } from "./dataProcessor.service";
import { MessageEmitter } from "../../../generic/messaging/emmiter/message.emitter";

export class DeviceService{
    constructor(private serialPort: SerialPortConnector){
    }
    initializeConnection(){
        this.serialPort.onDataReceived(DataProcessorService.dataSendToBuffer);
        DataProcessorService.onTimerBuffer(20000, (data)=>{
            console.log(data);
            MessageEmitter.Instance.push(data);
        });
    }
    


}