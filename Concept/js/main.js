class App {
    constructor(){
        const fetchData = new FetchData();
    }

    static getInstance(){
        if (!App._instance){
            App._instance = new App();
            return App._instance;
        }
        else{
            throw "App Exists";
        }

    }
    

}

(() =>{
    const app= App.getInstance()
})();