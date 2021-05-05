import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder,) { 
    this.form = this.fb.group({
      email: ['', Validators.required],
      password:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
