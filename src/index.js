
import Aside from "./modules/Aside/aside.js";
import Sidenav from "./modules/Sidenav/sidenav.js";
import Main from "./modules/Main/main.js";
import Mediator from "./modules/mediator.js";
import FormHandler from "./modules/Form/formHandler.js";
import DataManager from "./modules/Data_Handlers/dataManager.js";
import AppData from "./modules/Data_Handlers/AppData.js";
import appStateManager from "./modules/appStateManager.js";

let projectList = AppData.getData();

const mediator = new Mediator();
const dataManager = new DataManager(projectList);

const sidenav = new Sidenav(dataManager.getProjects());
const aside = new Aside();
const main = new Main();
const formHandler = new FormHandler();

mediator.register(sidenav);
mediator.register(main);
mediator.register(aside);
mediator.register(formHandler);
mediator.register(appStateManager);
mediator.register(dataManager);

sidenav.init();
main.init();
aside.init();
formHandler.init();
