import FormUI from "./formUI.js";

class Form {
    constructor(){
        this.formUI = new FormUI(this);
        this.mediator = null;
    }

    init(){
        this.formUI.loadUI();
    }

    setMediator(mediator){
        this.mediator = mediator;
    }

    receiveNotification(eventType, data){
        if(eventType == 'newProject' || eventType == 'editProject'){
            this.formUI.showProjectForm(data);
        }

        if(eventType == 'newTask' || eventType == 'editTask'){
            this.formUI.showTaskForm(data);
        }
    }
};

export default Form;