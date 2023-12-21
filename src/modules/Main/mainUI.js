

class MainUI {
    constructor(main){
        this.main = main;
        this.taskList = document.querySelector('.tasklist');
        this.addTaskBtn = document.querySelector('.addTask');
    }

    loadUI(){
        this.addTaskBtn.addEventListener('click', ()=>{
            this.main.mediator.notify(this.main, 'newTask', this.main.currProject);
        });

        this.taskList.addEventListener('click', (e) => {
            let uid = e.target.dataset.uid;
            
            if(!uid) return;

            this.main.mediator.notify(this.main, 'taskSelected', this.main.taskMap.get(uid));
        });
    }
};


export default MainUI;