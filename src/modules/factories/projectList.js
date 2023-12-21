
class ProjectList {
    constructor(){
        this.projectList = new Set();
    }

    getProjects(){
        return this.projectList;
    }

    addProject(project){
        this.projectList.add(project);
    }

    removeProject(project){
        this.projectList.delete(project);
    }
};

export default ProjectList;