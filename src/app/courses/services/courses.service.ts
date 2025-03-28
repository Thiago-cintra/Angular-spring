import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),//tras apenas a primeira requisição de resposta que vier do servidor
      // delay(1000),
      tap(courses => console.log(courses))
    );
  }
}
