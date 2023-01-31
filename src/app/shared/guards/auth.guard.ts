import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthService} from "../../auth/services/auth.service";
import {JwtService} from "../services/jwt.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService,
    private jwtService: JwtService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.jwtService.isTokenExpired()) {
      const token = this.jwtService.getToken();
      const decoded = this.jwtService.getTokenDecoded(token);
      this.auth.roleSubject.next(decoded.role);
      return true;
    }
    this.router.navigate(['./auth/login']);
    return false;
  }
}
