"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
class MessageEmitter {
    constructor() {
        this.subscribtions = {};
        this.emmiter = new events_1.EventEmitter();
    }
    static get Instance() {
        if (!this.instance) {
            this.instance = new MessageEmitter();
        }
        return this.instance;
    }
    onNextMessage(appName, callback) {
        let subId = appName + Date.now();
        this.subscribtions[subId] = callback;
        this.emmiter.on('next', callback);
        return subId;
    }
    push(message) {
        this.emmiter.emit('next', message);
    }
    unsubscribe(subId) {
        this.emmiter.removeListener('next', this.subscribtions[subId]);
    }
}
exports.MessageEmitter = MessageEmitter;
//# sourceMappingURL=message.emitter.js.map