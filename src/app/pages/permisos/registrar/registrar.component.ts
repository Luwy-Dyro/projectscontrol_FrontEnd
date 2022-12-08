import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  desRol = new FormControl('', [Validators.required]);

  formRegistrarRol = this.fb.group({
    desRol: this.desRol
  })


  constructor(private fb: FormBuilder,
    private router: Router,
    private readonly ps: ApiService
    ) { }

  ngOnInit(): void {
  }

  _insert(data:any){
    // const token = sessionStorage.getItem('token');
    // const header = { Authorization: 'Bearer ' + token};
    // console.log(header);
    
    this.ps.insertRoles(data).subscribe((rest:any) =>{
      if(rest.codigo == "201"){
        Swal.fire('Nuevo Rol','El rol de usuario ha sido creado con éxito.','success')
        this.router.navigate(['roles']);
      }else{
        alert('rest.errormessage')
      }
    })
  }


  _onsubmit(){
    if(this.formRegistrarRol.valid){
      //console.log(this.formRegistrarRol.value);
      this._insert(this.formRegistrarRol.value);
      
    } else {
      Swal.fire('Formulario Inválido','revise los datos','warning')
    }
  }

} 
