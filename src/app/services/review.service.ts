import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Comment } from '../models/comment';
import { jsonServer } from '../../environments/environment';
import { Dish } from '../models/dish';
import { HttpErrorService } from './http-error.service';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient, private httpError: HttpErrorService) {}

  sendReview(dish: Dish) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http
      .put<Comment>(jsonServer + `/dishes/${dish.id}`, dish, httpOptions)
      .pipe(catchError(this.httpError.handleError));
  }
}
