import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

 ngOnInit(): void {
  if(this.tokenService.getToken()) {
    this.isLogged = true;
    this.isLogginFail = false;
    this.roles = this.tokenService.getAuthorities();
  }
 }

 onLogin(): void {
  this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
  this.authService.login(this.loginUsuario).subscribe(data =>{
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.router.navigate([''])
    }, err => {
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj);
    })

 }
     
 
 
 
  /*form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      username:['',[Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      password:['',[Validators.required, Validators.minLength(8)]],
      email:['',[Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
  }

get Email()
{
  return this.form.get('email');  
}

get Password() 
{
  return this.form.get('password');
}

  // onEnviar(event: Event){
    event.preventDefault;

    if (this.form.valid){
      Llamamos a nuestro servicio para enviar los datos al servidor
      Tambien podríamos ejecutar alguna lógica extra
    //}else{
      //Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
    //  this.form.markAllAsTouched();
    //}
  //} */

}
