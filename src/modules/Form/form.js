import FormUI from "./formUI.js";
import FormDataHandler from "./formDataHandler.js";

class Form {
    constructor(){
        this.formUI = new FormUI(this);
        this.formDataHandler = new FormDataHandler();
        this.mediator = null;
    }

    init(){
        this.formUI.loadUI();
    }

    setMediator(mediator){
        this.mediator = mediator;
    }

    receiveNotification(eventType, data){
        if(eventType == 'newProject'){
            this.formUI.showProjectForm();
        }

        if(eventType == 'newTask'){
            this.formUI.showTaskForm();
        }
    }
};

export default Form;