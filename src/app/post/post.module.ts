import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import {PostRouting} from "./post.routing";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRouting,
    SharedModule
  ]
})
export class PostModule { }
