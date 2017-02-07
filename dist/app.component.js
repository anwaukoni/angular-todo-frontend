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
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getTasks()
            .subscribe(function (data) {
            console.log(data.json());
            _this.lists = data.json().map(function (elem) {
                elem.showBox = false;
                return elem;
            });
            console.log('Frontend', _this.lists);
        });
    };
    AppComponent.prototype.addTask = function (task) {
        var newTask = new task_1.Task(task);
        console.log(newTask);
        if (task) {
            this.lists.push(newTask);
            this.taskService.postTask(newTask)
                .subscribe(function (data) {
                newTask._id = data.json()._id;
                console.log('Added', data.json().title);
            });
        }
        console.log(this.lists);
    };
    AppComponent.prototype.keyboardInput = function (event) {
        if (event.which === 13) {
            this.addTask(event.srcElement.value);
            event.srcElement.value = '';
        }
    };
    AppComponent.prototype.deleteTask = function (index) {
        this.taskService.deleteTask(this.lists[index]._id).subscribe(function (res) { });
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
    AppComponent.prototype.getOne = function (index) {
        this.taskService.getOne(this.lists[index]._id)
            .subscribe(function (data) {
            console.log('getOne returns ', data.json());
        });
    };
    AppComponent.prototype.updateTask = function (task, index) {
        console.log(task, index);
        var newTask = new task_1.Task(task);
        this.lists[index].title = newTask.title;
        console.log(newTask.title);
        this.taskService.updateTask(this.lists[index]._id, newTask).subscribe(function (res) { });
    };
    return AppComponent;
}());
__decorate([
    core_1.HostListener('window:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "keyboardInput", null);
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "app/app.component.html",
        providers: [task_service_1.TaskService]
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map