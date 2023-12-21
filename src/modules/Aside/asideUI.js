
class AsideUI {
    constructor(aside){
        this.aside = aside;
        this.closeAsideBtn = document.querySelector('.closeAside');
        this.asideContainer = document.querySelector('.asideContainer');
        this.deleteTaskBtn = document.querySelector('.deleteTask');
    }

    loadUI(){
        this.closeAsideBtn.addEventListener('click', () => {
            this.closeAside();
        });

        this.deleteTaskBtn.addEventListener('click', () => {
            this.closeAside();
            this.aside.mediator.notify(this.aside, 'deleteTask', this.aside.currTask);
        });
    }

    closeAside(){
        this.asideContainer.style.width = '0px';
        this.aside.mediator.notify(this.aside, 'asideClosed', null);
    }

    openAside(){
        this.aside.mediator.notify(this.aside, 'asideOpened', null);
        this.asideContainer.style.width = '240px';
    }
};

export default AsideUI;