import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Modelsprojects } from 'src/app/models/modelsProjects';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detalleproject',
  templateUrl: './detalleproject.component.html',
  styleUrls: ['./detalleproject.component.scss']
})
export class DetalleprojectComponent implements OnInit {

  project:any = []
  
  constructor(
    private ps: ApiService,
    private ar: ActivatedRoute
     ) { }


  _getProjectById(id: number){
    //const params = "?id=" + id;
    const params = "/" + id;

    this.ps.getProjectById(params).subscribe((rest: any) =>{
      this.project = rest
  

    })
  }

  ngOnInit(): void {

    this.ar.params.subscribe((p: Params) => {

      if(p['id']){
        this._getProjectById(p['id']);
      }

    })

  }

}
