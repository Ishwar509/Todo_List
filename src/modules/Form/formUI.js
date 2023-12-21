
import FormDataHandler from "./formDataHandler";

class FormUI {
    constructor(form){
        this.form = form;
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
            this.form.mediator.notify(this.form, 'addProject', projectData);
        });

        this.taskForm.addEventListener('submit', () => {
            let todoData = FormDataHandler.getTodoData();
            this.taskForm.reset();
            this.form.mediator.notify(this.form, 'addTask', todoData);
        });

        this.closeFormBtns.forEach((curr) => {
            curr.addEventListener('click', (e)=>{
                e.target.closest('.modalBox').close();
            });
        });
    }

    showProjectForm(){
        this.projectModal.showModal();
    }

    showTaskForm(){
        this.taskModal.showModal();
    }
};

export default FormUI;