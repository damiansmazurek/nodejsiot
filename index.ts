import { ApplicationFactory } from "./generic/appFactory/application.factory";

function main() {
    console.log('System initializing...');
    ApplicationFactory.initializeApplications();
}
main();