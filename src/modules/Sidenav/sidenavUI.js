

class SidenavUI {
    constructor (sidenav){
        this.sidenav = sidenav;
        this.sidenavContainer = document.querySelector('.sidenavContainer');
        this.addProjectBtn = document.querySelector('#addProject');
        this.closeSidenavBtn = document.querySelector('#closeSidenav');
        this.openSidenavBtn = document.querySelector('#openSidenav');
    }

    loadUI(){
        this.addProjectBtn.addEventListener('click', (e)=>{
            this.sidenav.mediator.notify(this.sidenav, 'newProject', null);
        });
        
        this.closeSidenavBtn.addEventListener('click', () => {
            this.closeSideNav();
        });
        
        this.openSidenavBtn.addEventListener('click', () => {
            this.openSideNav();
        });
        
        window.addEventListener('resize', () => {
            if(window.innerWidth >= 800){
                this.sidenavContainer.removeAttribute('style');
            }
        });
    
        this.sidenavContainer.addEventListener('click', (e) => {
            let uid = e.target.closest('li')?.dataset.uid;
            if(!uid) return;
    
            this.sidenav.mediator.notify(this.sidenav, 'projectSelected', this.sidenav.projectMap.get(uid));
            this.closeSideNav();
        });
    }

    openSideNav(){
        this.sidenavContainer.style.width = '240px';
        this.sidenav.mediator.notify(this.sidenav, 'sidenavOpened', null);
    }

    closeSideNav(){
        this.sidenavContainer.removeAttribute('style');
        this.sidenav.mediator.notify(this.sidenav, 'sidenavClosed', null);
    }
};

export default SidenavUI;