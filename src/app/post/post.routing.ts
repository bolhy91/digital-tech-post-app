import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../auth/login/login.component";
import {RegisterComponent} from "../auth/register/register.component";
import {NgModule} from "@angular/core";
import {PostComponent} from "./post.component";

const routes: Routes = [
  {
    path: '',
    component: PostComponent
  },
  {
    path: '**',
    redirectTo: 'post',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRouting { }
