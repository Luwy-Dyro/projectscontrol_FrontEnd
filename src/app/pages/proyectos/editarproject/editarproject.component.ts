import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ModelsEstado } from 'src/app/models/modelEstado';
import { ModelSector } from 'src/app/models/modelSector';
import { Modelsprojects } from 'src/app/models/modelsProjects';
import { ModelsTipoProyecto } from 'src/app/models/modelTipoProyecto';
import { ProjectI } from 'src/app/models/project.interface';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-editarproject',
  templateUrl: './editarproject.component.html',
  styleUrls: ['./editarproject.component.scss']
})
export class EditarprojectComponent implements OnInit {

  
  id!: number;
  project:any = [];
  sector: any = [];
  estadoproyecto: any = [];
  tiposproyectos: any = [];


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
    observacion: this.observacion,
    

  }); 

  _getProjectById(id: number){
    const params = "/" + id;

    this.ps.getProjectById(params).subscribe((rest: any) =>{
      
      this.formProyecto.controls['nombreProyecto'].setValue(rest.nombreProyecto);
      this.formProyecto.controls['direccion'].setValue(rest.direccion);
      this.formProyecto.controls['observacion'].setValue(rest.observacion);
      
      this.formProyecto.controls['codTipo'].setValue(rest.codTipo);
      this.formProyecto.controls['codEstado'].setValue(rest.codEstado);
      this.formProyecto.controls['soporte'].setValue(rest.soporte);
      this.formProyecto.controls['coordinador'].setValue(rest.coordinador);
      this.formProyecto.controls['codSector'].setValue(rest.codSector);
      
      this.project = rest
      //console.log(rest);

    })



  }


  constructor(private fb: FormBuilder,
    private router: Router,
    private readonly ps: ApiService,
    private ar: ActivatedRoute
    ) { 


  

    }

    
  ngOnInit(): void {

    this.ps.getSector().subscribe((response: any) => {
      this.sector = response;  
    });
    this.ps.getTipoProyecto().subscribe((response: any) => {
      this.tiposproyectos = response;  
    });
    this.ps.getEstadoProyecto().subscribe((response: any) => {
      this.estadoproyecto = response;  
    });
    this.ar.params.subscribe((p: Params) => {
      if(p['id']){
        this._getProjectById(p['id']);        
      }
    })
    this.id = this.ar.snapshot.params['id'];

  }

  _update(data: any){
  
    this.ps.updateProject(this.id, data ).subscribe((rest:any) =>{
      
      //console.log(rest);
      if(rest.codigo == "201"){
        Swal.fire('Proyecto actualizado','El proyecto ha sido actualizado con éxito.','success')
        this.router.navigate(['proyecto-consultas']);
      }else{
        alert('error al grabar')
      }
    })
  }


  onsubmit(){
    
    if(this.formProyecto){
      // this.formProyecto.value.codTipo = parseInt(this.formProyecto.value.codTipo);
      // this.formProyecto.value.codEstado = parseInt(this.formProyecto.value.codEstado);
      // this.formProyecto.value.codSector = parseInt(this.formProyecto.value.codSector);
      //console.log(this.formProyecto.value);
      this._update(this.formProyecto.value);

    } else {
      Swal.fire('Formulario Inválido','revise los datos','warning')
    }

  }

}
