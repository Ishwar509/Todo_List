
class AppStateManager{
    constructor(){
        this.mediator = null;
        this.currProjectList = null;
        this.currProject = null;
        this.currTask = null;
    }

    getCurrProjectList(){
        return this.currProjectList;
    }

    getCurrProject(){
        return this.currProject;
    }

    getCurrTask(){
        return this.currTask;
    }

    setProjectList(projectList){
        this.currProjectList = projectList;
    }

    setProject(project){
        this.currProject = project;
    }

    setTask(tasklist){
        this.currTasklist = tasklist;
    }

    setMediator(mediator){
        this.mediator = mediator;
    }

    receiveNotification(eventType, data){
        if(eventType == 'projectsLoaded'){
            this.currProjectList = data;
        }
        else if(eventType == 'projectSelected'){
            this.currProject = data;
        }
        else if(eventType == 'taskSelected'){
            this.currTask = data;
        }
    }
};

const appStateManager = new AppStateManager();

export default appStateManager;