import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from 'src/app/servises/data.service';
import  swal  from 'sweetalert2'
import {NgForm}from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataArray: any;
  tosend: any;
  idtodo :any
   _id: any
  id: any;
  todos ={
    content :"",
    date:""
  };
  idd: any;
  idtodos: any;
  idt: any;
i:any
  dataArray1: any;
  constructor(public route:ActivatedRoute, private ds:DataService,public router:Router) {
   
    this.route.params.subscribe(params =>this._id=params.id)    // id stock dan var id
this.ds.listen().subscribe((m:any)=>{
      console.log(m)
      this.getTodoById(this.id,this.i)





      
})

// 
 }

  ngOnInit(): void {
  }
tt(){
  if(this.dataArray==''){ 
    this.dataArray1="      :   there is no todos right now !!"
   }else{
  this.ds.getalltodos().subscribe((Response:any)=>{
    this.dataArray=Response.listTodos// put data from function getallcommands in variable dataarray
    this.router.navigate(['todos/lister']);
  
 console.log(this.dataArray)
     } 
     
     )}
}
add(f:any){
  this.router.navigate(['todos/ajouter']);

  let data=f.value

  console.log(data)
 

  this.ds.addTodo(data).subscribe(data=>{ 
    // this.toast.success({detail:"success ",position:'tl',summary:"commande ajouter avec succés",duration:5000})
    
    // this.route.navigate(['/client/panier'],{state:{data:this.tosend}})
swal.fire({
  title:'success!',
  text:' todo ajouter avec succes',
  icon:'success',
  confirmButtonText:'ok'
  
})
f.reset()
this.router.navigate(['todos']);

    }, (err: HttpErrorResponse) => {
      // this.toast.error({detail:"L'opération a échoué",position:"tr",summary:"Veuillez remplir tous les champs",duration:5000})



     } )}
     delete(id: any, i: number) {
      this.ds.deleteTodo(id).subscribe((Response) => {
        console.log(Response);
        this.dataArray.splice(i, 1);
        swal.fire({
          title:'success!',
          text:' todo supprimer avec succes',
          icon:'success',
          confirmButtonText:'ok'
        })
        
      });
      this.router.navigate(['todos/ajouter']);

    }
    // gettodo(id:any,i:number){
    //   this.ds.getById(id).subscribe((response: any) => {
    //     // get all-comman
    //     this.todos=response.data
    //     console.log(this.todos)
        
    //   });
      
    // }
    
    editTodt(form:NgForm){

      const data= form.value

      axios.post(`http://localhost:3000/todos/modifier/${this.idtodos}`,data).then(
        res=>{

console.log(this.idtodos)
// swal.fire({
//   title:'success!',
//   text:' todo updated avec succes',
//   icon:'success',
//   confirmButtonText:'ok'

// })

this.router.navigate(['todos/lister']);



    }, (err: HttpErrorResponse) => {
      // this.toast.error({detail:"L'opération a échoué",position:"tr",summary:"Veuillez remplir tous les champs",duration:5000})



     } )

}
getTodoById(id:any,i:number){

axios.get("http://localhost:3000/todos/get/"+id).then(
  res=>{
    console.log(res.data)
    this.todos=res.data.Todos
    this.idtodos=res.data.Todos._id
    console.log(this.idtodos)
    this.router.navigate(['todos/modifier/'+this.idtodos]);


  }
).catch(
  err=>{
    console.log(err)
  }
)

}



}
