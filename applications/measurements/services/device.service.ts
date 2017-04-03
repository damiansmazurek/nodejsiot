import { SerialPortConnector } from '../connectors/serialPort.connector';
import { DataProcessorService } from "./dataProcessor.service";

export class DeviceService{
    constructor(private serialPort: SerialPortConnector){
    }
    initializeConnection(){
        this.serialPort.onDataReceived(DataProcessorService.dataSendToBuffer);
        DataProcessorService.onTimerBuffer(20000, (data)=>{
            console.log(data);
        });
    }
    


}