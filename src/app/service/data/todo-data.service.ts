import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/todo-list/todo-list.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) {
    
   }

  getAllTodos(username: string) {   
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
  }

  deleteById(username: string, id: number) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }
}