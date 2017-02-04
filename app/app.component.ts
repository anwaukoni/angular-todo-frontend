import {Component, OnInit} from "@angular/core";
import {TaskService} from "./task.service";
import {Task} from "./task";


@Component ({

  selector: "my-app",
  template: `
<!--
  <app-header-layout has-scrolling-region>
   <app-header fixed>
     <app-toolbar>
       <div title spacer>All heroes</div>
     </app-toolbar>
   </app-header>
   <div>My application content</div>
 </app-header-layout>
-->

    <header class="navbar">
      <h1  class="navbar-header">
        Our Todo List!
      </h1>
    </header>
      <nav class="navbar navbar-inverse col-sm-3 todoListNav" [class.invisible]="listEmpty()">
        <ul class="list-group" style="margin-top:1em; overflow:hidden;">
          <li style="cursor:pointer" class="list-group-item" *ngFor="let list of lists; let i = index" style="position:relative;">
            <span *ngIf="!list.showBox">{{list.title}}</span>
            <span *ngIf="list.showBox">.</span>
            <div *ngIf="list.showBox" style="position:absolute; left:0px; bottom:8px; ">
            <input  type="text" #editedTask="ngModel" [(ngModel)]="list.title" style="max-width:90%; margin-left:0.3em; width:108%; z-index:9999 !important;"/>

            </div>
            <span (click)= "deleteTask(i)" class="glyphicon glyphicon-trash" style="float:right "> </span>
            <span (click)="showEditbox(i)" *ngIf="showEditbox(i)" class="glyphicon glyphicon-pencil" style="float:right; margin-right:0.5em; z-index:999 !important;"></span>
            <span (click)= "showEditbox(i)" *ngIf="showEditbox(i)" class="glyphicon glyphicon-ok" style="float:right; margin-right:0.5em; z-index:999 !important;"> </span>  <!-- updateTask(editedTask.value, i) -->

          </li>
        </ul>

      </nav>
    <div class="jumbotron col-sm-9">
      <div >
      <paper-input #task type="text"  class="text-center col-sm-12" style="color: white; background-color:transparent; border-width:0 0 1px 0; padding: 0.5em; margin-bottom:15px;" label="New Task"></paper-input>
      <button (click)="addTask(task.value)" class="text-center btn btn-success" style="padding-right:5em; padding-left:5em; ">Add</button>
        <!--form class="form" (submit)=addTask(Task.value);>
            <textarea class="col-sm-12" placeholder="Say more about your task" style="background-color:transparent; border-width:0 0 1px 0; padding: 0.5em; background-color:rgba(230,230, 230, 0.2); color[placeholder]:white; margin-bottom:1em;">
            </textarea>
            <div class="col-sm-12 text-center">
              <input type="submit" class="text-center btn btn-success" style="padding-right:5em; padding-left:5em; "/>
            </div>
        </form-->
      </div>

    </div>

    <footer class="text-center">
      CopyRight &copy; 2017
    </footer>
  `
  ,
  styles: [`
    header {padding : 0 20px 0}
    .jumbotron{box-shadow : 0 5px 0 rgba(230, 230, 230, 0.6); }
    .todoListNav{margin:0 0 0 0;}
    .invisible{opacity:0;}
    app-toolbar {
      background: var(--primary-color);
      color: var(--dark-theme-text-color);
    }
    paper-input{
      color: #fff;
    }
    `],
    providers:[TaskService]
})

export class AppComponent implements OnInit{
  constructor(private taskService:TaskService){}
ngOnInit (){
  
        this.taskService.getTasks()
          .subscribe(data =>{
            console.log(data);
          })
            

      }
  lists: Task[] = [new Task("Task 1"), new Task("Task 2"), new Task("Task 3")]

  addTask(task: string){
    const newTask : Task = new Task(task);
    console.log(task);
    if(task){
      this.lists.push(newTask);
    }
    console.log(this.lists);
  }

  deleteTask(index:number){
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

  updateTask (task, index){
      console.log(task.title,this.lists[index].title);
      if(task){
        this.lists[index].title = task.title;
      }
    }
      
  }

// lists = [{
//   "title":"Task 1",
//   "description":"Make Pudding",
//   "date": "today's date"
// },
// {
//   "title":"Task 2",
//   "description":"Make Pudding",
//   "date": "today's date"
// },
// {
//   "title":"Task 3",
//   "description":"Make Pudding",
//   "date": "today's date"
// }];
