class Users{
    constructor(name, kidneyHealthStatus, toxic ,budget){
        this.name = name;
        this.kidneys = { "Status" :  kidneyHealthStatus, "toxicity" : toxic}
        this.budget = budget;
    }    
}
 purush = new Users("purush", false, true, 0);
 mahila = new Users("mahila", true, false, 2000);
 const user = purush;
 console.log(user.kidneys.Status)