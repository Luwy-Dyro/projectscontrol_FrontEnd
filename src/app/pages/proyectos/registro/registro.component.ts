import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelsEstado } from 'src/app/models/modelEstado';
import { ModelSector } from 'src/app/models/modelSector';
import { ModelsTipoProyecto } from 'src/app/models/modelTipoProyecto';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  sector: any = [];
  estadoproyecto: any = [];
  tipoproyecto: any = [];

  nombreProyecto = new FormControl('', [Validators.required]); 
  codTipo = new FormControl('', [Validators.required]);
  codEstado = new FormControl('', [Validators.required]);
  soporte = new FormControl('', [Validators.required]);
  coordinador = new FormControl('', [Validators.required]);
  codSector = new FormControl('', [Validators.required]);
  direccion = new FormControl('', [Validators.required]);
  observacion = new FormControl('');

  formProyecto = this.fb.group({
    nombreProyecto: this.nombreProyecto,
    codTipo:  this.codTipo,
    codEstado: this.codEstado,
    soporte: this.soporte,
    coordinador: this.coordinador, 
    codSector: this.codSector,
    direccion: this.direccion,
    observacion: this.observacion
  }); 
 

  tipoProyectos: ModelsTipoProyecto[] = [];
  estados: ModelsEstado[] = [];
  sectores:ModelSector[] = [];

  constructor(private fb: FormBuilder,
    private router: Router,
    private readonly ps: ApiService
    ) { }


  ngOnInit(): void {

    this.ps.getSector().subscribe((response: any) => {
      //this.sector = response.data;  
      this.sector = response;  
   
      
    });
    this.ps.getTipoProyecto().subscribe((response: any) => {
      //this.tipoproyecto = response.data;  
      this.tipoproyecto = response;  
      
    });
    this.ps.getEstadoProyecto().subscribe((response: any) => {
      //this.estadoproyecto = response.data;  
      this.estadoproyecto = response;  
    });

  }
  

  _insert(data:any){
    // const token = sessionStorage.getItem('token');
    // const header = { Authorization: 'Bearer ' + token};
    

    this.ps.insertProject(data).subscribe((rest:any) =>{
      if(rest.codigo == "201"){
        Swal.fire('Nuevo proyecto','El proyecto ha sido creado con éxito.','success')
        this.router.navigate(['proyecto-consultas']);
      }else{
        alert('rest.errormessage')
      }  
      console.log(rest);
      
    })
  }


  onsubmit(){
    if(this.formProyecto.valid){
      this.formProyecto.value.codTipo = parseInt(this.formProyecto.value.codTipo);
      this.formProyecto.value.codEstado = parseInt(this.formProyecto.value.codEstado);
      this.formProyecto.value.codSector = parseInt(this.formProyecto.value.codSector);
      console.log(this.formProyecto.value);
      this._insert(this.formProyecto.value);
      
    } else {
      Swal.fire('Formulario Inválido','revise los datos','warning')
    }
  }

}
