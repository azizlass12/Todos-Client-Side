// import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getalltodos() {
    return this.http.get("http://localhost:3000/todos/lister")
  }

  
  addTodo(profile: any) {
    return this.http.post('http://localhost:3000/todos/ajouter', profile)
    
    
  }
  deleteTodo(id: any) {
    return this.http.delete('http://localhost:3000/todos/supprimer/' + id)
  }


}
