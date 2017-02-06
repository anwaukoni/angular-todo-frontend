import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
@Injectable()

export class TaskService{
constructor(private http:Http){}
getTasks(){
        return this.http.get('http://localhost:8080/tasks');
}
deleteTask(){
        return this.http.get('http://localhost:8080/tasks');
}

    // TaskService.get('http://localhost:8080/')
    // .post('/task')
    // .put('/task/:id')
    // .delete('/task/:id')
    // getOne('/task/:id')
}