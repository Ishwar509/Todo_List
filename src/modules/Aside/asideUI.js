
class AsideUI {
    constructor(aside){
        this.aside = aside;
        this.closeAsideBtn = document.querySelector('.closeAside');
        this.asideContainer = document.querySelector('.asideContainer');
        this.deleteTaskBtn = document.querySelector('.deleteTask');
        this.editTaskBtn = document.querySelector('.editTask');
        this.editChecklistBtn = document.querySelector('.editChecklist');
    }

    loadUI(){
        this.closeAsideBtn.addEventListener('click', () => {
            this.closeAside();
        });

        this.deleteTaskBtn.addEventListener('click', () => {
            this.closeAside();
            this.aside.mediator.notify(this.aside, 'deleteTask', this.aside.currTask);
        });

        this.editTaskBtn.addEventListener('click', () => {
            this.aside.mediator.notify(this.aside, 'editTask', this.aside.currTask);
        });

        this.editChecklistBtn.addEventListener('click', () => {
            this.aside.mediator.notify(this.aside, 'editChecklist', this.aside.currTask.checklist);
        });
    }

    closeAside(){
        this.asideContainer.style.width = '0px';
        this.aside.mediator.notify(this.aside, 'asideClosed', null);
    }

    openAside(){
        this.aside.mediator.notify(this.aside, 'asideOpened', null);
        this.asideContainer.style.width = '300px';
    }
};

export default AsideUI;