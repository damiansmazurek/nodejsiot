
import { MessageService } from "./services/message.service";
import { FormaterService } from "./services/formater.service";

export function main() {
    console.log('Initialization of formater application');
    let messageService = new MessageService();
    let formaterService = new FormaterService(messageService);
    formaterService.initialize();
}