import { Injectable } from '@angular/core';
import {ApiService} from "../../shared/services/api.service";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private apiService: ApiService) { }
  getPosts(page: number = 1) {
    return this.apiService.get(`posts`).pipe(
      map(res => res)
    );
  }
}
