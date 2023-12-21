import Project from "./factories/project";
import { Todo, Step } from "./factories/todo";
import appStateManager from "./appStateManager";

class DataManager {
    constructor(){
        this.mediator = null;
        this.projectList = new Set();
    }

    getProjects(){
        return this.projectList;
    }

    addProject(project){
        this.projectList.add(project);
    }

    removeProject(project){
        this.projectList.delete(project);
    }

    setMediator(mediator){
        this.mediator = mediator;
    }

    receiveNotification(eventType, data){
        if(eventType == 'addProject'){
            this.addProject(new Project(data));
            this.mediator.notify(this, 'projectAdded', null);
        }

        if(eventType == 'deleteProject'){
            this.removeProject(data);
            this.mediator.notify(this, 'projectDeleted', null);
        }

        if(eventType == 'addTask'){
            appStateManager.currProject.addTodo(new Todo(data));  
            this.mediator.notify(this, 'taskAdded', null);        
        }

        if(eventType == 'deleteTask'){
            appStateManager.currProject.removeTodo(data);
            this.mediator.notify(this, 'taskDeleted', null);
        }
    }
};

export default DataManager;