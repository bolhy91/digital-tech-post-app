import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {SharedModule} from "../shared/shared.module";
import {AdminRouting} from "./admin.routing";



@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRouting,
    SharedModule
  ]
})
export class AdminModule { }
