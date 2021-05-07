import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as fromStateRedux from '../../shared/state/state.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder,
    private store: Store<AppState>,
    private _router:Router,) { 
    this.form = this.fb.group({
      email: ['', Validators.required],
      password:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onLogged(){
    this.store.dispatch(fromStateRedux.loggedAction({logged:true}));
    this._router.navigate(['dashboard'])
  }

}
