"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FormaterService {
    constructor(messageService) {
        this.messageService = messageService;
    }
    initialize() {
        this.messageService.subscribePreprocedData((data) => {
            console.log('Basic data', data);
        });
    }
}
exports.FormaterService = FormaterService;
//# sourceMappingURL=formater.service.js.map