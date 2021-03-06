import {Component, OnInit, HostListener} from "@angular/core";
import {TaskService} from "./task.service";
import {Task} from "./task";


@Component ({

  selector: "my-app",
  templateUrl: "app/app.component.html",
  providers:[TaskService]
})

export class AppComponent implements OnInit{
  constructor(private taskService:TaskService){}
  lists: Task[];
  which: number;
ngOnInit (){

        this.taskService.getTasks()
          .subscribe(data =>{
            console.log(data.json());
            this.lists = data.json().map(function(elem){
              elem.showBox = false;
              return elem;
            });
            console.log('Frontend', this.lists);
          })
      }

  addTask(task: string){
    const newTask : Task = new Task(task);
    console.log(newTask);
    if(task){
      this.lists.push(newTask);
      this.taskService.postTask(newTask)
      .subscribe(data =>{
        newTask._id = data.json()._id;
        console.log('Added',data.json().title);
      });
    }
    console.log(this.lists);
  }

  @HostListener('window:keydown', ['$event'])
  keyboardInput(event: any){
    console.log(Number.isInteger(parseInt(event.srcElement.id)));
     let newTaskStr: string = event.srcElement.value;
    if (event.which === 13) {
      if(event.srcElement.id === 'add_form'){
        this.addTask(newTaskStr);

      }else if(Number.isInteger(parseInt(event.srcElement.id))){
         let index = parseInt(event.srcElement.id);
        // let index: number = parseInt(editFormClass.match(/\d+/));
        console.log(newTaskStr, index);
        this.updateTask(newTaskStr, index);
        this.lists[index].showBox = false;
      }
      console.log(event.srcElement);
      event.srcElement.value = '';
    }

  }



  deleteTask(index:number){
    this.taskService.deleteTask(this.lists[index]._id).subscribe((res) => {});
    this.lists.splice(index,1);
  }

  listEmpty(){
    return !this.lists.length;
  }

  showEditbox(index:number){
      if(this.lists[index].showBox){
        this.lists[index].showBox = false;
      }else{
        this.lists[index].showBox= true;
      }
    return this.lists[index].showBox;

  }

  getOne(index:number){
    this.taskService.getOne(this.lists[index]._id)
          .subscribe(data =>{
            console.log('getOne returns ', data.json());
          })
  }

  updateTask (task: string, index: number){
      const newTask : Task = new Task(task);
        this.lists[index].title = newTask.title;
        console.log(newTask.title);
        this.taskService.updateTask(this.lists[index]._id, newTask).subscribe((res) => {});
    }

  }
