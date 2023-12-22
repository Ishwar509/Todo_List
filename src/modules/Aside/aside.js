import AsideUI from "./asideUI.js";
import AsideDOM from "./asideDOM.js";


class Aside {
    constructor(){
        this.currTask = null;
        this.mediator = null;
        this.asideUI = new AsideUI(this);
        this.asideDOM = new AsideDOM();
    }

    init(){
        this.asideUI.loadUI();
    }

    refresh(){
        this.asideDOM.renderTaskInfo(this.currTask);
    }

    showTaskInfo(){
        this.refresh();
        this.asideUI.openAside();
    }

    setCurrTask(task){
        this.currTask = task;
    }

    setMediator(mediator){
        this.mediator = mediator;
    }

    receiveNotification(eventType, data){
        if(eventType == 'taskSelected'){
            this.setCurrTask(data);
            this.showTaskInfo();
        }

        if(eventType == 'sidenavOpened' || eventType == 'projectSelected'){
            this.asideUI.closeAside();
        }

        if(eventType == 'taskEdited' || eventType == 'checklistEdited'){
            this.refresh();
        }
    }
};

export default Aside;