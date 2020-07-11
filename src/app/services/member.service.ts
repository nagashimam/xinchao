import { Injectable } from '@angular/core';
import { Member } from '../models/member';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { jsonServer } from '../../environments/environment';
import { HttpErrorService } from './http-error.service';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  constructor(private http: HttpClient, private httpError: HttpErrorService) {}

  fetchMembers(): Observable<Member[]> {
    const url = `${jsonServer}/members`;
    return this.http
      .get<Member[]>(url)
      .pipe(catchError(this.httpError.handleError));
  }
}
