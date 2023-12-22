import FormDataHandler from "./formDataHandler.js";
import { ProjectForm, TaskForm, ChecklistForm } from "./Forms.js";

class FormHandler {
    constructor(){
        this.projectForm = new ProjectForm(this, FormDataHandler.getProjectData, FormDataHandler.loadProjectData);
        this.taskForm = new TaskForm(this, FormDataHandler.getTodoData, FormDataHandler.loadTodoData);
        this.checklistForm = new ChecklistForm(this, FormDataHandler.getChecklistData, FormDataHandler.loadChecklistData);
        this.mediator = null;
    }

    init(){
        this.projectForm.setupUI();
        this.taskForm.setupUI();
        this.checklistForm.setupUI();
    }

    setMediator(mediator){
        this.mediator = mediator;
    }

    receiveNotification(eventType, data){

        if(eventType == 'editChecklist'){
            this.checklistForm.showForm(data);
        }

        if(eventType == 'newProject' || eventType == 'editProject'){
            this.projectForm.submitAction = 'new';

            if(eventType == 'editProject'){
                this.projectForm.submitAction = 'edit';
            }

            this.projectForm.showForm(data);
        }


        if(eventType == 'newTask' || eventType == 'editTask'){
            this.taskForm.submitAction = 'new';

            if(eventType == 'editTask'){
                this.taskForm.submitAction = 'edit';
            }

            this.taskForm.showForm(data);
        }  
    }
};

export default FormHandler;