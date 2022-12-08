import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Modelsprojects } from 'src/app/models/modelsProjects';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-entregable',
  templateUrl: './registro-entregable.component.html',
  styleUrls: ['./registro-entregable.component.scss']
})
export class RegistroEntregableComponent implements OnInit {

  proyectos : any = []

  nombreAplicativo = new FormControl('', [Validators.required]);
  tipoUso = new FormControl('', [Validators.required]);
  codTipoApp = new FormControl('', [Validators.required]);
  codProyecto = new FormControl('', [Validators.required]);

  formEntregables = this.fb.group({
    nombreAplicativo: this.nombreAplicativo,
    tipoUso: this.tipoUso,
    codTipoApp: this.codTipoApp,
    codProyecto: this.codProyecto
  });

  constructor(private fb: FormBuilder,
    private router: Router,
    private readonly ps: ApiService
    ) { }

  ngOnInit(): void {

    this.getProjects();
  }


  getProjects(){

    this.ps.getProjects().subscribe((response: any) => {
      this.proyectos = response;  
      //console.log( this.proyectos);
      
    });

  }

  _insert(data:any){
    // const token = sessionStorage.getItem('token');
    // const header = { Authorization: 'Bearer ' + token};
    
    this.ps.insertAplicativos(data).subscribe((rest:any) =>{
      if(rest.codigo == "201"){
        Swal.fire('Nuevo aplicativo','El aplicativo ha sido creado con éxito.','success')
        this.router.navigate(['entregable-consulta']);
      }else{
        alert('rest.errormessage')
      } 
    })
  }






  onsubmit(){
    if(this.formEntregables.valid){
      this.formEntregables.value.codTipoApp = parseInt(this.formEntregables.value.codTipoApp);
      this.formEntregables.value.codProyecto = parseInt(this.formEntregables.value.codProyecto);
      console.log(this.formEntregables.value);
      this._insert(this.formEntregables.value);
      
    } else {
      Swal.fire('Formulario Inválido','revise los datos','warning')
    }
  }

}