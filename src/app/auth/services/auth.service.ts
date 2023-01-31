import { Injectable } from '@angular/core';
import {ApiService} from "../../shared/services/api.service";
import {JwtService} from "../../shared/services/jwt.service";
import {map} from "rxjs";

interface LoginDto {
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService, private jwtService: JwtService) { }

  login(credentials: LoginDto) {
    return this.apiService.post(`auth/login`, credentials)
      .pipe(map(res => {
          if (res.user && res.token) {
            this.jwtService.setToken(res.token.token);
          }
          return res;
      }));
  }
}
