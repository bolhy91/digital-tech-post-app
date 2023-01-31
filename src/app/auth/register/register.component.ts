import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../shared/styles/auth.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,
              private router: Router,) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  registerUser() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value)
        .subscribe(data => {
          console.log(data);
          if (data) {
            this.router.navigate(['./post']);
          }
        }, error => {
          alert("Oops! Error al registrarse. Intentolo nuevamente");
        }, () => {
        });
    }
  }
}
