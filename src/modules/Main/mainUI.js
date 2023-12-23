

class MainUI {
    constructor(main){
        this.main = main;
        this.taskList = document.querySelector('.tasklist');
        this.addTaskBtn = document.querySelector('.addTask');
        this.deleteProjectBtn = document.querySelector('.deleteProject');
        this.editProjectBtn = document.querySelector('.editProject');
    }

    loadUI(){
        this.addTaskBtn.addEventListener('click', ()=>{
            this.main.mediator.notify(this.main, 'newTask', null);
        });

        this.deleteProjectBtn.addEventListener('click', () => {
            this.main.mediator.notify(this.main, 'deleteProject', this.main.currProject);
        });

        this.editProjectBtn.addEventListener('click', () => {
            this.main.mediator.notify(this.main, 'editProject', this.main.currProject);
        });

        this.taskList.addEventListener('click', (e) => {

            if(e.target.classList.contains('deleteTask_main')){
                const taskItem = e.target.closest('.taskItem');
                this.main.mediator.notify(this.main, 'deleteTask', this.main.taskMap.get(taskItem.dataset.uid));
                return;
            }
            
            if(e.target.classList.contains('checkbox')){
                const taskItem = e.target.closest('.taskItem');
                const task = this.main.taskMap.get(taskItem.dataset.uid);
                task.changeStatus();
                taskItem.dataset.isComplete = task.isComplete;
                this.main.mediator.notify(this.main, 'taskEdited', null);
                return;
            }

            let uid = e.target.closest('.taskItem')?.dataset.uid;
            
            if(!uid) return;

            this.main.mediator.notify(this.main, 'taskSelected', this.main.taskMap.get(uid));
        });
    }
};


export default MainUI;