import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
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
  loading: boolean;
  stateSubs: Subscription = new Subscription();

  constructor(private fb: FormBuilder,
    private store: Store<AppState>,
    private _router: Router,
    private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      email: ['hiworld@gmail.com', Validators.required],
      password: ['123Qwerty', Validators.required]
    });
    this.store.select('state').subscribe(state => {
      console.log('state:   ', state);
      this.loading = state.loading
    })
  }

  ngOnInit(): void {
  }

  onLogged() {
    this.store.dispatch(fromStateRedux.UpdateLoadingAction({ loading: true }));
    if (this.form.status === "VALID" && this.form.get('email')!.value === 'hiworld@gmail.com' && this.form.get('password').value === '123Qwerty') {
      console.log('entro');
      this.store.dispatch(fromStateRedux.loggedAction({ logged: true }));
      setTimeout(() => {
        this.store.dispatch(fromStateRedux.UpdateLoadingAction({ loading: false }));
        this._router.navigate(['dashboard']);
      }, 4000);
    }else{
      setTimeout(() => {
        this.openSnackBar('Input data error');
        this.store.dispatch(fromStateRedux.UpdateLoadingAction({ loading: false }));
      }, 1500);
    }
  }





  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2500,
    });
  }

}
