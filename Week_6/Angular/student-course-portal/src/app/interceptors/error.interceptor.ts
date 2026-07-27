import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError(err => {
      if (err.status === 401) { console.log('Navigate to login'); }
      if (err.status === 500) { console.log('Global Error Notification'); }
      return throwError(() => err);
    })
  );
};