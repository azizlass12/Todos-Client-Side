import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import  swal  from 'sweetalert2'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  idtodos: any;
  id: any;

  constructor(private route:ActivatedRoute) { 
 
  }

  ngOnInit(): void {
  }
  editTodt(form:NgForm){

    const data= form.value
console.log(this.idtodos)
    axios.post(`http://localhost:3000/todos/modifier/${this.idtodos}`,data).then(
      res=>{
          console.log("eee")


swal.fire({
title:'success!',
text:' todo ajouter avec succes',
icon:'success',
confirmButtonText:'ok'
})
form.reset()
  }, (err: HttpErrorResponse) => {
    // this.toast.error({detail:"L'opération a échoué",position:"tr",summary:"Veuillez remplir tous les champs",duration:5000})



   } )

}
}
