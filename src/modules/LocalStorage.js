class LocalStorage{
    static storeData(id, data){
        localStorage.setItem(id, JSON.stringify(data));
    }  

    static retrieveData(id){
        const data = localStorage.getItem(id);
        return JSON.parse(data);
    }
};

export default LocalStorage;