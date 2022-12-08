import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProjectI } from '../models/project.interface';
import { ResponseI } from '../models/response.interface';
import { Modelsaplicactivos } from '../models/modelsAplicativos';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const url_api = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Java
  private API_PROJECT = url_api + "/proyecto/inicio"
  private API_PROJECT_BYID = url_api + "/proyecto/buscarproyecto"
  private API_INSERT_PROJECT = url_api + "/proyecto/crear"
  private API_UPDATE_PROJECT = url_api + "/proyecto/actualizar"
  private API_DELETE_PROJECT = url_api + "/proyecto/elimin"

  private API_APLICACTIVO = url_api + "/aplicativo/inicio"
  private API_INSERT_APLICACTIVO = url_api + "/aplicativo/crear"
  private API_DELETE_APLICACTIVO = url_api + "/aplicativo/eliminar"

  private API_SECTOR = url_api + "/datos/sector"
  private API_INSERT_SECTOR = url_api + "/datos/crearsector"
  private API_DELETE_SECTOR = url_api + "/datos/sector"
  
  private API_TIPOPROYECTO = url_api + "/datos/tipoproyect"
  private API_INSERT_TIPOPROYECTO = url_api + "/datos/creartipoproyect"
  private API_DELETE_TIPOPROYECTO = url_api + "/datos/tipoproyect"

  private API_ESTADOPROYECTO = url_api + "/datos/estadoproyect"
  private API_INSERT_ESTADOPROYECTO = url_api + "/datos/crearestadoproyect"
  private API_DELETE_ESTADOPROYECTO = url_api + "/datos/estadoproyect"

    
  private API_USUARIOS = url_api + "/usuario/inicio"
  private API_INSERT_USUARIOS = url_api + "/usuario/crear"
  private API_DELETE_USUARIOS = url_api + "/datos/tipoproyect"

   private API_ROLES = url_api + "/datos/rol"
  private API_INSERT_ROLES = url_api + "/datos/crearrol"
  private API_DELETE_ROLES = url_api + "/datos/rol"


  
  //C#
  //private API_ROLES = "https://localhost:44309/api/rolusuario/getrolusuario"; 
  //private API_TIPOPROYECTO = "https://localhost:44309/api/tipoproyecto/gettipoproyecto";
  //private API_ESTADOPROYECTO = "https://localhost:44309/api/estadoproyecto/getestadoproyecto";
  //private API_SECTOR = "https://localhost:44309/api/sector/getsector"; 
  //private API_USUARIOS = "https://localhost:44309/api/User/getusuarios"; 

  //private API_INSERT_ROLES = "https://localhost:44309/api/rolusuario/insert"; 





  constructor(public http: HttpClient) {}

  //Projects with Material
  // getProjects() {
  //   return this.http.get(this.API_PROJECT);
  // }
  /** Projects */
  getProjects() {
    return this.http.get(this.API_PROJECT);
  }

  getProjectById(params: any){
    return this.http.get(this.API_PROJECT_BYID + params)
  }

  insertProject(data: any){
    return this.http.post(this.API_INSERT_PROJECT, data);
  }

  updateProject(id: number, data: ProjectI): Observable<any> {
    const url = `${ this.API_UPDATE_PROJECT }/${id}`;
    return this.http.put(url, data);
    //return this.http.put<ResponseI>(this.API_UPDATE_PROJECT, data);
  }
  deleteProject(id: any): Observable<any> {
    const url = `${ this.API_DELETE_PROJECT }/${id}`;
    return this.http.delete(url);
    //return this.http.put<ResponseI>(this.API_UPDATE_PROJECT, data);
  }


  /** APLICACTIVOS*/
  getAplicativos() {
    return this.http.get<Modelsaplicactivos[]>(this.API_APLICACTIVO);
  }

  insertAplicativos(data: any){
    return this.http.post(this.API_INSERT_APLICACTIVO, data);

  }
  deleteApp(id: any): Observable<any> {
    const url = `${ this.API_DELETE_APLICACTIVO }/${id}`;
    return this.http.delete(url);
    
  }
  

  /** DATOS COMBO */

  getSector(){
    return this.http.get(this.API_SECTOR);
  }
  insertSector(data: any){
    return this.http.post(this.API_INSERT_SECTOR, data);

  }
  deleteSector(id: any): Observable<any> {
    const url = `${ this.API_DELETE_SECTOR }/${id}`;
    return this.http.delete(url);
    
  }



  getEstadoProyecto(){
    return this.http.get(this.API_ESTADOPROYECTO);
  }
  deleteEstadoProyecto(id: any): Observable<any> {
    const url = `${ this.API_DELETE_ESTADOPROYECTO }/${id}`;
    return this.http.delete(url);
    
  }

  
  getTipoProyecto(){
    return this.http.get(this.API_TIPOPROYECTO);
  }
  deleteTipoProyecto(id: any): Observable<any> {
    const url = `${ this.API_DELETE_TIPOPROYECTO }/${id}`;
    return this.http.delete(url);
    
  }




  getRoles(){
    return this.http.get(this.API_ROLES);
  }

  insertRoles(data: any){
    return this.http.post(this.API_INSERT_ROLES, data);

  }

  deleteRol(id: any): Observable<any> {
    const url = `${ this.API_DELETE_ROLES }/${id}`;
    return this.http.delete(url);
    
  }

  // insertTP(data: any, headers: any){
  //   return this.http.post(this.API_INSERT_TIPOPROYECTO, data, {headers});
  // }

  insertTP(data: any){
    return this.http.post(this.API_INSERT_TIPOPROYECTO, data);
  }



  insertEstado(data: any){
    return this.http.post(this.API_INSERT_ESTADOPROYECTO, data);

  }

  getUsuario(){
    return this.http.get(this.API_USUARIOS);
  }

  
  deleteUser(id: any): Observable<any> {
    const url = `${ this.API_DELETE_USUARIOS }/${id}`;
    return this.http.delete(url);
    
  }

  
  insertUsuarios(data: any){
    return this.http.post(this.API_INSERT_USUARIOS, data);
  }


  /** */

  getEstado(){
    return this.http.get(this.API_ESTADOPROYECTO);
  }





}
 