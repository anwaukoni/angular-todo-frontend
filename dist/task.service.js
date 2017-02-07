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
var http_1 = require("@angular/http");
var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
    }
    TaskService.prototype.getOne = function (_id) {
        return this.http.get('http://localhost:8080/task/' + _id);
    };
    TaskService.prototype.getTasks = function () {
        return this.http.get('http://localhost:8080/task');
    };
    TaskService.prototype.deleteTask = function (_id) {
        console.log('http://localhost:8080/task/' + _id);
        return this.http.delete('http://localhost:8080/task/' + _id);
    };
    TaskService.prototype.updateTask = function (_id, task) {
        return this.http.put('http://localhost:8080/task/' + _id, task);
    };
    TaskService.prototype.postTask = function (task) {
        return this.http.post('http://localhost:8080/task/', task);
    };
    return TaskService;
}());
TaskService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map