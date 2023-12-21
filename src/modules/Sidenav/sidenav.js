import SidenavDOM from "./sidenavDOM.js";
import SidenavUI from "./sidenavUI.js";

class Sidenav {
    constructor(projectList){
        this.mediator = null;
        this.projectMap = new Map();

        this.projectList = projectList;
        this.sidenavDOM = new SidenavDOM();
        this.sidenavUI = new SidenavUI(this);
    }

    init(){
        this.refresh();
        this.sidenavUI.loadUI();
        this.selectDefaultProject();
    }

    loadProjectListData(){
        this.projectMap.clear();

        for(let project of this.projectList){
            this.projectMap.set(this.getUID(), project);
        }
    }

    selectDefaultProject(){
        this.mediator.notify(this, 'projectSelected', this.projectMap.values().next().value);
    }

    refresh(){
        this.loadProjectListData();
        this.sidenavDOM.renderProjects(this.projectMap);
        this.mediator.notify(this, 'projectsLoaded', this.projectList);
    }

    setMediator(mediator){
        this.mediator = mediator;
    }  

    receiveNotification(eventType, data){
        if(eventType == 'asideOpened'){
            this.sidenavUI.closeSideNav();
        }

        if(eventType == 'projectAdded' || eventType == 'taskAdded' 
            || eventType == 'taskDeleted' || eventType == 'projectEdited'){
            this.refresh();
        }

        if(eventType == 'projectDeleted'){
            this.refresh();
            this.selectDefaultProject();
        }
    }

    getUID(){
        let randomNum = Math.floor(Math.random() * 1e9);
        return randomNum.toString(36);
    }
};

export default Sidenav;