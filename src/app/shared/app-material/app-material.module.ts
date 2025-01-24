import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
  ],
})
export class AppMaterialModule {}
//esse modulo serve apenas para gosto pessoal e economizar algumas linhas de codigo dentro dos modulos
//economizando os imports apenas para este modulo
