import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../shared/styles/auth.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  signInUser() {
    this.isLoading = true;
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
        .subscribe(data => {
          console.log(data);
          this.isLoading = false;
          if (data) {
            this.router.navigate(['./post']);
          }
        }, error => {
          this.isLoading = false;
          alert("Oops! Error al iniciar sesion. Verifique su usuario");
        }, () => {
        });
    }
  }

}
