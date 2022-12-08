import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin! : FormGroup; 
  public siteKey: any;

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);


  constructor(
    private formLog: FormBuilder,
    private readonly us: UserService,
    private router: Router

    ) {   
   }
 

  ngOnInit(): void {
    this.formLogin = this.formLog.group({
      recaptcha:['', Validators.required],
      username: this.username,
      password: this.password,
    })
    this.siteKey = "6LepvDseAAAAABVQiGySskXxgO5XcVMLyWced4XM"
  
  }

  login(data:any){
    
    
    this.us._login(data).subscribe((rest: any) => {
      console.log(rest);
      
      if(rest.access_token){
        sessionStorage.setItem('token', rest.refresh_token);
        sessionStorage.setItem('user', rest.vNomUsuario);
        sessionStorage.setItem('userprofile', rest.vUsuario + ' - ' + rest.vRolUsuario);
        sessionStorage.setItem('profile', rest.vRolUsuario);
        // console.log(sessionStorage.getItem('user'));
        // console.log(sessionStorage.getItem('userprofile'));
        // console.log(sessionStorage.getItem('profile'));
        this.router.navigateByUrl("home", { skipLocationChange: false }).then( () => {
          this.router.navigate(['home']);
          window.location.reload();
        })

      }else{
        alert("Credenciales Inválidas")
      }
    })
  } 

 
  onSubmit(){
    if(this.formLogin.valid){
      console.log(this.formLogin.value);
      this.login(this.formLogin.value)
      // this.router.navigate(['/home'])
      // .then(() => {
      //   window.location.reload();
      // });

    } 
    else{
      alert("Complete los campos")
    }

  }

}
