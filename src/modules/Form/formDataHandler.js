import Project from "../factories/project";
import { Todo, Step } from "../factories/todo";
import appStateManager from "../appStateManager";

class FormDataHandler {
    
    handleData(dataType){
        if(dataType == 'project'){
            this.createNewProject();
        }
        else if(dataType == 'task'){
            this.createNewTask();
        }
    }

    createNewProject(){
        let projectTitle = document.querySelector('#projectTitleInput').value;
        let project = new Project(projectTitle);
        
        appStateManager.currProjectList.set(this.getUID(), project);
    }

    createNewTask(){
        let title = document.querySelector('#taskTitleInput').value;
        let duedate = document.querySelector('#duedateInput').value;
        let priority = document.querySelector('#priorityInput').value;
        let note = document.querySelector('#noteInput').value;

        let todo = new Todo(title, duedate, priority, [], false, note);
        appStateManager.currProject.addTodo(todo);
    }

    getUID(){
        let randomNum = Math.floor(Math.random() * 1e9);
        return randomNum.toString(36);
    }
};

export default FormDataHandler;