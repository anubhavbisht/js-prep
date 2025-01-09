class Task {
  constructor(dependencies = [], callbackJob) {
    this.job = callbackJob;
    this.isCompleted = false;
    this.dependencies = dependencies ?  dependencies.filter((task)=>{
        task instanceof Task && !task.isCompleted
    }): []
    this.subscribedTasks = []
    this.processTasks()
  }
  processTasks(){
    if(this.dependencies && this.dependencies.length > 0) {
        for(let dependency of this.dependencies){
            
        }
    }else{
        this.job(this.done.bind(this))
    }
  }
}
