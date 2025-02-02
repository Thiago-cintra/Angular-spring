import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.scss'
})
export class ErrorDialogComponent {

  //A anotação @Inject, está injetando o MAT_DIALOG dentro da variável dataError
  constructor(@Inject(MAT_DIALOG_DATA) public dataError: string) {


  }

}
