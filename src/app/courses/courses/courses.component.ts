import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';

import { Course } from '../model/course';
import {catchError, Observable, of} from 'rxjs';
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  // Qndo habilitamos o modo strict no Angular, é necessario sempre inicializar a variavel, seja na declaração
  // ou dentro do contrutor

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  //coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {
    // this.courses = [ ]; //ou ela pode ser inicializada desta maneira.
    //this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list()
      .pipe(catchError(error => {
        console.log(error);
        return of([])
        })
      );
  }

  ngOnInit(): void {
    //em versões anteriores, tbm poderia ser inicializado aqui dentro do OnInit, porem aqui ou dentro do contrutor
    // nao faz tanta diferença
    // this.courses = this.coursesService.list();
  }
}
