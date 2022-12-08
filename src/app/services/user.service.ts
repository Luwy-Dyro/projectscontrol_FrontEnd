import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_LOGIN = "http://localhost:8086/sisar/api/oauth/token"; 



  constructor(
    private readonly http: HttpClient
  ) { }


  validarToken(){
    
     return !!sessionStorage.getItem('token');
      
  }

    _login(data: any): Observable<any>{
      
      const credenciales = btoa('angularapp' + ':' + '123456');

        const httpHeaders = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + credenciales
        })

        let params = new URLSearchParams();
        params.set('grant_type', 'password');
        params.set('username', data.username);
        params.set('password', data.password);
        // console.log(httpHeaders);
        // console.log(params.toString());
        return this.http.post<any>(this.API_LOGIN, params.toString(), { headers: httpHeaders })
        
    }

  // _insert(data:any, headers:any){
  //   return this.http.post<any>('https://localhost:44309/api/User/insert', data, {headers})
  // }


  
}
