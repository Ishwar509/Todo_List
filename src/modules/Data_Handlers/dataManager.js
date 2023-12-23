import Project from "../factories/project";
import Todo from "../factories/todo";
import appStateManager from "../appStateManager";
import LocalStorage from "./LocalStorage";

class DataManager {
    constructor(projectList = []){
        this.mediator = null;
        this.projectList = projectList;
    }

    getProjects(){
        return this.projectList;
    }

    addProject(project){
        this.projectList.push(project);
    }

    removeProject(project){
        this.projectList = this.projectList.filter(curr => curr !== project);
    }

    setMediator(mediator){
        this.mediator = mediator;
    }

    notifier(message){
        LocalStorage.storeData('projectList', this.projectList);
        this.mediator.notify(this, message, null);
    }

    receiveNotification(eventType, data) {
        switch (eventType) {
            case 'addProject':
                this.addProject(new Project(data));
                this.notifier('projectAdded');
                break;
    
            case 'deleteProject':
                this.removeProject(data);
                this.notifier('projectDeleted');
                break;
    
            case 'modifyProject':
                Object.assign(appStateManager.currProject, data);
                this.notifier('projectEdited');
                break;
    
            case 'addTask':
                appStateManager.currProject.addTodo(new Todo(data));
                this.notifier('taskAdded');
                break;
    
            case 'deleteTask':
                appStateManager.currProject.removeTodo(data);
                this.notifier('taskDeleted');
                break;
    
            case 'modifyTask':
                Object.assign(appStateManager.currTask, data);
                this.notifier('taskEdited');
                break;
    
            case 'modifyChecklist':
                Object.assign(appStateManager.currTask, data);
                this.notifier('checklistEdited');
                break;
        }
    }
};

export default DataManager;