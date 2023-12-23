import MainUI from "./mainUI.js";
import MainDOM from "./mainDOM.js";

class Main {
    constructor(){
        this.currProject = null;
        this.taskMap = new Map();
        this.mediator = null;

        this.mainUI = new MainUI(this);
        this.mainDOM = new MainDOM();
    }

    init(){
        this.mainUI.loadUI();
    }

    refresh(){
        this.loadProjectData();
        this.mainDOM.renderTasks(this.currProject, this.taskMap);
    }

    loadProjectData(){
        this.taskMap.clear();
        
        let todoList = this.currProject.todoList;
        todoList.forEach((todo) => {
            this.taskMap.set(this.getUID(), todo);
        });
    }

    getUID(){
        let randomNum = Math.floor(Math.random() * 1e9);
        return randomNum.toString(36);
    }

    setMediator(mediator){
        this.mediator = mediator;
    }

    receiveNotification(eventType, data){
        if(eventType == 'projectSelected'){
            this.currProject = data;
            this.refresh();
        }

        if(eventType == 'taskAdded' || eventType == 'taskDeleted' || eventType == 'taskEdited' || eventType == 'projectEdited'){
            this.refresh();
        }
    }
};

export default Main;