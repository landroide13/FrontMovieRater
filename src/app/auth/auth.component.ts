import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private api: ApiService) { }

  authForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  ngOnInit(): void {
  }

  saveForm(){
    this.api.loginUser(this.authForm.value).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
    console.log(this.authForm.value)
  }

}
