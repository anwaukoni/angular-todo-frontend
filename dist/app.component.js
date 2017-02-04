"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var task_service_1 = require("./task.service");
var task_1 = require("./task");
var AppComponent = (function () {
    function AppComponent(taskService) {
        this.taskService = taskService;
        this.lists = [new task_1.Task("Task 1"), new task_1.Task("Task 2"), new task_1.Task("Task 3")];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.taskService.getTasks()
            .subscribe(function (data) {
            console.log(data);
        });
    };
    AppComponent.prototype.addTask = function (task) {
        var newTask = new task_1.Task(task);
        console.log(task);
        if (task) {
            this.lists.push(newTask);
        }
        console.log(this.lists);
    };
    AppComponent.prototype.deleteTask = function (index) {
        this.lists.splice(index, 1);
    };
    AppComponent.prototype.listEmpty = function () {
        return !this.lists.length;
    };
    AppComponent.prototype.showEditbox = function (index) {
        if (this.lists[index].showBox) {
            this.lists[index].showBox = false;
        }
        else {
            this.lists[index].showBox = true;
        }
        return this.lists[index].showBox;
    };
    AppComponent.prototype.updateTask = function (task, index) {
        console.log(task.title, this.lists[index].title);
        if (task) {
            this.lists[index].title = task.title;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n<!--\n  <app-header-layout has-scrolling-region>\n   <app-header fixed>\n     <app-toolbar>\n       <div title spacer>All heroes</div>\n     </app-toolbar>\n   </app-header>\n   <div>My application content</div>\n </app-header-layout>\n-->\n\n    <header class=\"navbar\">\n      <h1  class=\"navbar-header\">\n        Our Todo List!\n      </h1>\n    </header>\n      <nav class=\"navbar navbar-inverse col-sm-3 todoListNav\" [class.invisible]=\"listEmpty()\">\n        <ul class=\"list-group\" style=\"margin-top:1em; overflow:hidden;\">\n          <li style=\"cursor:pointer\" class=\"list-group-item\" *ngFor=\"let list of lists; let i = index\" style=\"position:relative;\">\n            <span *ngIf=\"!list.showBox\">{{list.title}}</span>\n            <span *ngIf=\"list.showBox\">.</span>\n            <div *ngIf=\"list.showBox\" style=\"position:absolute; left:0px; bottom:8px; \">\n            <input  type=\"text\" #editedTask=\"ngModel\" [(ngModel)]=\"list.title\" style=\"max-width:90%; margin-left:0.3em; width:108%; z-index:9999 !important;\"/>\n\n            </div>\n            <span (click)= \"deleteTask(i)\" class=\"glyphicon glyphicon-trash\" style=\"float:right \"> </span>\n            <span (click)=\"showEditbox(i)\" *ngIf=\"showEditbox(i)\" class=\"glyphicon glyphicon-pencil\" style=\"float:right; margin-right:0.5em; z-index:999 !important;\"></span>\n            <span (click)= \"showEditbox(i)\" *ngIf=\"showEditbox(i)\" class=\"glyphicon glyphicon-ok\" style=\"float:right; margin-right:0.5em; z-index:999 !important;\"> </span>  <!-- updateTask(editedTask.value, i) -->\n\n          </li>\n        </ul>\n\n      </nav>\n    <div class=\"jumbotron col-sm-9\">\n      <div >\n      <paper-input #task type=\"text\"  class=\"text-center col-sm-12\" style=\"color: white; background-color:transparent; border-width:0 0 1px 0; padding: 0.5em; margin-bottom:15px;\" label=\"New Task\"></paper-input>\n      <button (click)=\"addTask(task.value)\" class=\"text-center btn btn-success\" style=\"padding-right:5em; padding-left:5em; \">Add</button>\n        <!--form class=\"form\" (submit)=addTask(Task.value);>\n            <textarea class=\"col-sm-12\" placeholder=\"Say more about your task\" style=\"background-color:transparent; border-width:0 0 1px 0; padding: 0.5em; background-color:rgba(230,230, 230, 0.2); color[placeholder]:white; margin-bottom:1em;\">\n            </textarea>\n            <div class=\"col-sm-12 text-center\">\n              <input type=\"submit\" class=\"text-center btn btn-success\" style=\"padding-right:5em; padding-left:5em; \"/>\n            </div>\n        </form-->\n      </div>\n\n    </div>\n\n    <footer class=\"text-center\">\n      CopyRight &copy; 2017\n    </footer>\n  ",
        styles: ["\n    header {padding : 0 20px 0}\n    .jumbotron{box-shadow : 0 5px 0 rgba(230, 230, 230, 0.6); }\n    .todoListNav{margin:0 0 0 0;}\n    .invisible{opacity:0;}\n    app-toolbar {\n      background: var(--primary-color);\n      color: var(--dark-theme-text-color);\n    }\n    paper-input{\n      color: #fff;\n    }\n    "],
        providers: [task_service_1.TaskService]
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], AppComponent);
exports.AppComponent = AppComponent;
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
//# sourceMappingURL=app.component.js.map