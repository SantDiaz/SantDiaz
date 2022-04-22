import { Component, OnInit } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { AuthService } from 'src/app/service/AuthService';






@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {
  FormLogin: FormGroup = this.formulario.group({
  email: [, [Validators.required, Validators.minLength(6)]],
  pass: [, [Validators.required,Validators.min(6)]],
  });
 

  constructor( private formulario : FormBuilder, private authService : AuthService, private router:Router ) { }

  ngOnInit(): void {
  }


validacion(campo: string){
  return(
    this.FormLogin.controls[campo].errors &&
    this.FormLogin.controls[campo].touched
  );
}

guardar(){
  if(this.FormLogin.invalid){
    this.FormLogin.markAllAsTouched();
    return
  }
  
}

async Ingresar (){
  const{ email, pass } = this.FormLogin.value;
  try {
    const user = await this.authService.login(email, pass);
     if (user){
       localStorage.setItem('usuario', JSON.stringify(user.user))
       this.router.navigate(['/Inicio']);
     } 
    } catch (err){
      console.log(err)
    } 
  }

async IngresarConGoogle(){
  const{ email, pass } = this.FormLogin.value;
  try {
    const user = await this.authService.loginWithGoogle(email, pass);
    if (user){
      localStorage.setItem('usuario', JSON.stringify(user.user))
      this.router.navigate(['/Inicio']);
    } 
   } catch (err){
     console.log(err)
   } 
}



}
