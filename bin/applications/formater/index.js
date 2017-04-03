"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_service_1 = require("./services/message.service");
const formater_service_1 = require("./services/formater.service");
function main() {
    console.log('Initialization of formater application');
    let messageService = new message_service_1.MessageService();
    let formaterService = new formater_service_1.FormaterService(messageService);
    formaterService.initialize();
}
exports.main = main;
//# sourceMappingURL=index.js.map