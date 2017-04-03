import { EventEmitter } from 'events'
export class MessageEmitter {
    private static instance:MessageEmitter;
    public static get Instance() : MessageEmitter {
        if(!this.instance){
            this.instance = new MessageEmitter();
        }
            return this.instance;
    }
    private emmiter: EventEmitter;
    private subscribtions= {};
    private messagesArray: any[];
    constructor() {
        this.emmiter = new EventEmitter();
    }
    onNextMessage(appName:string, callback: (data:any)=>void):string{
        let subId= appName+Date.now();
        this.subscribtions[subId] = callback;
        this.emmiter.on('next',callback);
        return subId;
    }
    push(message:any){
        this.emmiter.emit('next', message);
    }
    unsubscribe(subId:string){
        this.emmiter.removeListener('next',this.subscribtions[subId]);
    }
}