import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.scss']
})
export class MantenimientoComponent implements OnInit {

  typetableseleccionada: string = 'Tipo de Proyectos';

  typetables: string[] = ['Tipo de Proyectos', 'Estado de Proyectos','Sector'];
    

  constructor( ) { }



  ngOnInit(): void {


  }


}
