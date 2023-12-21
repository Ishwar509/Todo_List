class Mediator {
    constructor(){
        this.components = new Set();
    }

    register(component){
        this.components.add(component);
        component.setMediator(this);
    }

    unregister(component){
        this.components.delete(component);
        component.setMediator(null);
    }

    notify(sender, eventType, data){
        console.log(eventType);

        this.components.forEach((component) => {
            if(component !== sender){
                component.receiveNotification(eventType, data);
            }
        });
    }
};

export default Mediator;