import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './componentes/error-dialog/error-dialog.component';
import {AppMaterialModule} from "./app-material/app-material.module";
import {MatButton} from "@angular/material/button";
import { CategoryPipe } from './pipes/category.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    MatButton
  ],
  exports:[
    ErrorDialogComponent,
    CategoryPipe
  ]
})
export class SharedModule { }
