import SidenavDOM from "./sidenavDOM.js";
import SidenavUI from "./sidenavUI.js";

class Sidenav {
    constructor(projectList){
        this.mediator = null;

        this.projectList = projectList;
        this.sidenavDOM = new SidenavDOM();
        this.sidenavUI = new SidenavUI(this);
    }

    selectDefaultProject(){
        this.mediator.notify(this, 'projectSelected', this.projectList.values().next().value);
    }

    init(){
        this.sidenavDOM.renderProjects(this.projectList);
        this.sidenavUI.loadUI();
        this.selectDefaultProject();
    }

    refresh(){
        this.sidenavDOM.renderProjects(this.projectList);
    }

    setMediator(mediator){
        this.mediator = mediator;
    }  

    receiveNotification(eventType, data){

    }
};

export default Sidenav;