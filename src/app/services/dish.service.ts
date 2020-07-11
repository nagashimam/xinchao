import { Injectable } from '@angular/core';
import { Dish } from '../models/dish';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { jsonServer } from '../../environments/environment';
import { HttpErrorService } from './http-error.service';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor(private http: HttpClient, private httpError: HttpErrorService) {}

  fetchFeaturedDish(): Observable<Dish> {
    const url = `${jsonServer}/dishes?featured=true`;
    return this.http
      .get<Dish[]>(url)
      .pipe(map((dishes) => dishes[0]))
      .pipe(catchError(this.httpError.handleError));
  }
}
