import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('req.url');
  console.log(req.url);
  const reqWitHeader = req.clone({
    withCredentials: true,
  });
  return next(reqWitHeader);
};

@Injectable()
class LoggingInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    handler: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Request URL: ' + req.url);
    console.log('req.url');
    console.log(req.url);
    const reqWitHeader = req.clone({
      withCredentials: true,
    });
    return handler.handle(reqWitHeader);
  }
}
