
import { MessageService } from "./message.service";

export class FormaterService {
    constructor(protected messageService: MessageService){

    }
    initialize(){
        this.messageService.subscribePreprocedData((data)=>{
            console.log('Basic data',data);
        })
    }
    
    
}