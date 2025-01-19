import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
  ],
})
export class AppMaterialModule {}
//esse modulo serve apenas para gosto pessoal e economizar algumas linhas de codigo dentro dos modulos
//economizando os imports apenas para este modulo
