import { ApplicationList } from "../../application.list";

export class ApplicationFactory {
    constructor() {
    }
    static moduleList = {};
    static initializeApplications() {
        ApplicationList.appList.forEach(item => {
            setTimeout(() => {
                let tmpModule = require('../../applications/' + item + '/index.js');
                tmpModule.main();
                ApplicationFactory.moduleList[item]= tmpModule;
            }, 100);
        });
    }
}