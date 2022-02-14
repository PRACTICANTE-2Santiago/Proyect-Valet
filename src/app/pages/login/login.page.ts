import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  iconpassword = 'eye-off-outline';

  usuario = {
    pin: '',
    user: '',
    password: ''
  }

  isActiveToogle: Boolean = true;
  constructor() { }

  ngOnInit() {

  }

  onSubmit(formulario: NgForm){
    console.log(this.usuario);
    console.log(formulario);
    
    
  }
  togglePassword(){
    this.isActiveToogle = (this.isActiveToogle==true)?false:true;

    this.iconpassword = this.iconpassword === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
  }
  getType(){
    return this.isActiveToogle ? 'password': 'text;'
  }

}
