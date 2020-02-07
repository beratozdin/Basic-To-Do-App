var app = new Vue({
  el: "#app",
  data: {
    message: "",
    tasks :[],
    compTasks:[],
    addedTask: "",
    delElement:0,
    compDelElement:0 
  },
  methods: {

  	addTask: function(event){

  		this.addedTask=event.target.value;//Get name of task
  	},
    indexOfTask: function(event){

      this.delElement=parseInt(event.target.value,10);
    },
    indexOfCompTask: function(event){

      this.compDelElement=parseInt(event.target.value,10);
    },
    addList: function(){

      if(this.addedTask===""){//string is empty
      }
      else{
       this.tasks.push({message: this.addedTask});
      }
    },
    delList: function(){//Delete a task from tasks list.Then add this task to compTasks list.

      this.compTasks.push({message: this.tasks[this.delElement-1].message});
      this.tasks.splice(this.delElement-1,1);
    },
    delAll: function(){

      this.compTasks.splice(this.compDelElement-1,1);//Delete a task from compTask list
    }
  }
});