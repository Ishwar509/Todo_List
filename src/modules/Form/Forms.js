import FormDataHandler from "./formDataHandler";

class BasicForm {
    constructor(formHandler, getData, loadData){
        this.submitAction = null;
        this.formHandler = formHandler;
        this.getData = getData;
        this.loadData = loadData;
    }

    showForm(data){
        this.submitAction = data ? 'edit' : 'new';
        this.loadData(data);
        this.modal.showModal();
    }

    handleFormSubmission(){
        const message = this.getMessage();
        const data = this.getData();
        this.formElement.reset();
        this.formHandler.mediator.notify(this.formHandler, message, data);
    }

    setupUI(){
        this.formElement.addEventListener('submit', () => {
            this.handleFormSubmission();
        });

        this.closeBtn.addEventListener('click', () => {
            this.modal.close();
        });
    }
};


class ProjectForm extends BasicForm {
    constructor(formHandler, getData, loadData){
        super(formHandler, getData, loadData);
        this.modal = document.querySelector('.projectModal');
        this.formElement = document.querySelector('.projectModal form');
        this.closeBtn = document.querySelector('.projectModal .close');
    }

    getMessage(){
        return this.submitAction == 'new' ? 'addProject' : 'modifyProject';
    }
};

class TaskForm extends BasicForm {
    constructor(formHandler, getData, loadData){
        super(formHandler, getData, loadData);
        this.modal = document.querySelector('.taskModal');
        this.formElement = document.querySelector('.taskModal form');
        this.closeBtn = document.querySelector('.taskModal .close');
    }

    getMessage(){
        return this.submitAction == 'new' ? 'addTask' : 'modifyTask';
    }
};


class ChecklistForm extends BasicForm {
    constructor(formHandler, getData, loadData){
        super(formHandler, getData, loadData);
        this.modal = document.querySelector('.checklistModal');
        this.formElement = document.querySelector('.checklistModal form');
        this.closeBtn = document.querySelector('.checklistModal .close');
        this.itemList = document.querySelector('.itemList');
        this.addStepBtn = document.querySelector('.checklistModal .addStep');
        this.init();
    }

    getMessage(){
        return 'modifyChecklist';
    }

    init(){
        this.itemList.addEventListener('click', (e) => {
            if(e.target.classList.contains('deleteItem')){
                this.itemList.removeChild(e.target.closest('li'));
            }
        });

        this.addStepBtn.addEventListener('click', () => {
            const input = document.querySelector('#checklistInput').value;

            if(input.trim() == "") return;

            const item = FormDataHandler.createItem(input);
            this.itemList.appendChild(item);

            document.querySelector('#checklistInput').value = "";
        });
    }
}

export {ProjectForm, TaskForm, ChecklistForm};