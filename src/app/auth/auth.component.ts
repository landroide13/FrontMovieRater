import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

//interface TokenObj{
 // token: string
//}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private api: ApiService, private cookie: CookieService, private router: Router) { }

  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  registerMode = false
  
  ngOnInit(){
    const mvtoken = this.cookie.get('mv-token')
    if(mvtoken){
      this.router.navigate(['/movies'])
    }
  }

  saveForm(){
    if(!this.registerMode){
      this.login();
      console.log(this.authForm.value.username)
    }else{
      this.api.registerUser(this.authForm.value).subscribe(
        (res: any) => {
          console.log(res);
          this.login();
        },
        err => console.log(err)
      )
      console.log(this.authForm.value.username)
    } 
  }

  login(){
    this.api.loginUser(this.authForm.value).subscribe(
      (res: any) => {
        console.log(res);
        this.cookie.set('mv-token', res.token);
        this.router.navigate(['/movies']);
      },
      err => console.log(err)
    )
  }

 

}
