
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
            this.form.formDataHandler.handleData('project');
            this.projectForm.reset();
            this.form.mediator.notify(this.form, 'projectAdded', null);
        });

        this.taskForm.addEventListener('submit', () => {
            this.form.formDataHandler.handleData('task');
            this.taskForm.reset();
            this.form.mediator.notify(this.form, 'taskAdded', null);
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