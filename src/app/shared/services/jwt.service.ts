// @ts-ignore
import * as jwt_decode from 'jwt-decode';
import {Injectable} from '@angular/core';

interface TokenDecoded {
  exp: number;
  iat: number;
  role: string;
  _id: string;
}
@Injectable({
  providedIn: 'root'
})
export class JwtService {

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  destroyToken() {
    localStorage.removeItem('token');
  }

  getTokenDecoded(token: string | null): TokenDecoded {
    if (!token) {
      token = this.getToken();
    }
    return jwt_decode(token);
  }

  getTokenExpirationDate(token: string): Date | null{
    const decoded = jwt_decode(token);
    if (decoded.exp === undefined) {
      return null
    }
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string | null): boolean {
    if (!token) {
      token = this.getToken();
    }
    if (!token) {
      return true;
    }
    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }
    // @ts-ignore
    return !(date.valueOf() > new Date().valueOf());
  }

}
