"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_list_1 = require("../../application.list");
class ApplicationFactory {
    constructor() {
    }
    static initializeApplications() {
        application_list_1.ApplicationList.appList.forEach(item => {
            setTimeout(() => {
                let tmpModule = require('../../applications/' + item + '/index.js');
                tmpModule.main();
                ApplicationFactory.moduleList[item] = tmpModule;
            }, 100);
        });
    }
}
ApplicationFactory.moduleList = {};
exports.ApplicationFactory = ApplicationFactory;
//# sourceMappingURL=application.factory.js.map