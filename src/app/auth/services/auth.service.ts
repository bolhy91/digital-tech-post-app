import {Injectable} from '@angular/core';
import {ApiService} from "../../shared/services/api.service";
import {JwtService} from "../../shared/services/jwt.service";
import {BehaviorSubject, map, Observable} from "rxjs";

interface LoginDto {
  username: string;
}

interface RegisterDto {
  name: string;
  surname: string;
  username: string;
  avatar?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public roleSubject: BehaviorSubject<string>;
  public currentRole: Observable<string>;

  constructor(private apiService: ApiService, private jwtService: JwtService) {
    this.roleSubject = new BehaviorSubject<string>('');
    this.currentRole = this.roleSubject.asObservable();
  }

  public get currentRoleValue(): string {
    return this.roleSubject.value;
  }

  login(credentials: LoginDto) {
    return this.apiService.post(`auth/login`, credentials)
      .pipe(map(res => {
        if (res.user && res.token) {
          this.jwtService.setToken(res.token.token);
        }
        return res;
      }));
  }

  register(credentials: RegisterDto) {
    return this.apiService.post(`auth/register`, credentials)
      .pipe(map(res => {
        if (res.user && res.token) {
          this.jwtService.setToken(res.token.token);
        }
        return res;
      }));
  }

  logout() {
    this.jwtService.destroyToken();
  }
}
