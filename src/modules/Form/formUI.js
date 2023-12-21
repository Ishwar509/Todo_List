
import FormDataHandler from "./formDataHandler";

class FormUI {
    constructor(form){
        this.form = form;
        this.submitAction = null;
        this.projectModal = document.querySelector('.projectModal');
        this.taskModal = document.querySelector('.taskModal');
        this.projectForm = document.querySelector('.projectModal form');
        this.taskForm = document.querySelector('.taskModal form');
        this.closeFormBtns = document.querySelectorAll('button[data-action="closeForm"]');
    }

    loadUI(){
        this.projectForm.addEventListener('submit', () => {
            let projectData = FormDataHandler.getProjectData();
            this.projectForm.reset();
            this.form.mediator.notify(this.form, this.submitAction == 'new' ? 'addProject' : 'modifyProject', projectData);
        });

        this.taskForm.addEventListener('submit', () => {
            let todoData = FormDataHandler.getTodoData();
            this.taskForm.reset();
            this.form.mediator.notify(this.form, this.submitAction == 'new' ? 'addTask' : 'modifyTask', todoData);
        });

        this.closeFormBtns.forEach((curr) => {
            curr.addEventListener('click', (e)=>{
                e.target.closest('.modalBox').close();
            });
        });
    }

    showProjectForm(data){
        if(data){
            this.submitAction = 'edit';
            FormDataHandler.loadProjectData(data);
        }
        else this.submitAction = 'new';
        
        this.projectModal.showModal();
    }

    showTaskForm(data){
        if(data){
            this.submitAction = 'edit';
            FormDataHandler.loadTodoData(data);
        }
        else this.submitAction = 'new';

        this.taskModal.showModal();
    }
};

export default FormUI;