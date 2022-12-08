import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private us: UserService, 
    private router: Router){
  }

  canActivate(){
    if(this.us.validarToken()){
      return true
    }
    this.router.navigateByUrl('/login');
    return false;

  }
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot){

  //     const token = sessionStorage.getItem('token');
  //     this.redirect(token)

  //     return token;
  // }


  
}
