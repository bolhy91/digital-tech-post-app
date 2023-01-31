import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {RoleEnum} from "../enums/role.enum";
import {AuthService} from "../../auth/services/auth.service";
import {Observable} from "rxjs";
import {JwtService} from "../services/jwt.service";

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  admin: RoleEnum = RoleEnum.ADMIN;

  constructor(
    private router: Router,
    private auth: AuthService,
    private jwtService: JwtService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this.jwtService.getToken();
    const decoded = this.jwtService.getTokenDecoded(token);
    this.auth.roleSubject.next(decoded.role);
    if (decoded.role === this.admin) {
      return true;
    }
    this.router.navigate(['./post']);
    return false;
  }
}
