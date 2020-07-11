import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorService {
  constructor() {}
  public handleError(error: HttpErrorResponse | any) {
    const isErrorEvent = error.error instanceof ErrorEvent;
    const errMsg: string = isErrorEvent
      ? error.error.message
      : `${error.status} - ${error.statusText || ''} ${error.error}`;
    return throwError(errMsg);
  }
}
