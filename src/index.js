// import { loadSidenavUI} from "./modules/sidenavController.js";
// import { loadAsideUI } from "./modules/asideController.js";
// import { loadMainUI } from "./modules/mainController.js";
// import { loadModalUI } from "./modules/modalBox.js";
// import { loadFormUI } from "./modules/form.js";

// loadSidenavUI();
// loadAsideUI();
// loadMainUI();
// loadModalUI();
// loadFormUI();


import Aside from "./modules/Aside/aside.js";
import Sidenav from "./modules/Sidenav/sidenav.js";
import Main from "./modules/Main/main.js";
import Mediator from "./modules/mediator.js";
import dataManager from "./modules/dataManager.js";

const mediator = new Mediator();
const sidenav = new Sidenav(dataManager.ProjectList);
const aside = new Aside();
const main = new Main();

mediator.register(sidenav);
mediator.register(main);
mediator.register(aside);

sidenav.init();
main.init();
aside.init();

