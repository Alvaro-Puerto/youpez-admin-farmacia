import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router
  ) {}


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = localStorage.getItem('token');
    const authReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${authToken}`)
    });
    return next.handle(request).pipe(catchError(
      (error: HttpErrorResponse)  => {
        if (error.status === 401) {
          this.router.navigate(['/auth/signin'])
        }
        return throwError(error);
      }
    ));
  }
}
