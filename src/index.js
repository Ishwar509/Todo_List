
import Aside from "./modules/Aside/aside.js";
import Sidenav from "./modules/Sidenav/sidenav.js";
import Main from "./modules/Main/main.js";
import Mediator from "./modules/mediator.js";
import Form from "./modules/Form/form.js";
import DataManager from "./modules/dataManager.js";
import defaultProjects from "./modules/appData.js";
import appStateManager from "./modules/appStateManager.js";


const mediator = new Mediator();
const dataManager = new DataManager();

defaultProjects.forEach((project) => {
    dataManager.addProject(project);
});

const sidenav = new Sidenav(dataManager.getProjects());
const aside = new Aside();
const main = new Main();
const form = new Form();

mediator.register(sidenav);
mediator.register(main);
mediator.register(aside);
mediator.register(form);
mediator.register(appStateManager);
mediator.register(dataManager);

sidenav.init();
main.init();
aside.init();
form.init();
