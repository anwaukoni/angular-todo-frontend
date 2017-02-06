import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Task} from "./task";
@Injectable()

export class TaskService{
constructor(private http:Http){}
				getOne(id: String){
												return this.http.get('http://localhost:8080/task/'+ id);
				}
				getTasks(){
												return this.http.get('http://localhost:8080/task');
				}
				deleteTask(id: String){
												console.log('http://localhost:8080/task/'+ id);
												return this.http.delete('http://localhost:8080/task/'+ id);
				}
				updateTask(id: String, task: Task){
												return this.http.put('http://localhost:8080/task/'+ id, task);
				}
				postTask(task: Task){
												return this.http.post('http://localhost:8080/task/', task);
				}
}