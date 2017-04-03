import { MessageEmitter } from "../../../generic/messaging/emmiter/message.emitter";

export class MessageService {
    sendMessage(data){
        MessageEmitter.Instance.push(data);
    }
    subscribePreprocedData(callback){
        MessageEmitter.Instance.onNextMessage('formater',(data)=>{
            if(data.msgType && (data.msgType as string).includes('native')){
               callback(data);             
            }
        });
    }

}