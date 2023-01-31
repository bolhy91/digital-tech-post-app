import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { ItemImageComponent } from './components/item-image/item-image.component';

const BASE_MODULE = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
]

@NgModule({
  declarations: [
    ItemImageComponent
  ],
  imports: [...BASE_MODULE],
  exports: [...BASE_MODULE, ItemImageComponent]
})
export class SharedModule { }
