"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_emitter_1 = require("../../../generic/messaging/emmiter/message.emitter");
class MessageService {
    sendMessage(data) {
        message_emitter_1.MessageEmitter.Instance.push(data);
    }
    subscribePreprocedData(callback) {
        message_emitter_1.MessageEmitter.Instance.onNextMessage('formater', (data) => {
            if (data.msgType && data.msgType.includes('native')) {
                callback(data);
            }
        });
    }
}
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map