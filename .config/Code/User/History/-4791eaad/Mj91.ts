import { HttpInterceptorFn } from '@angular/common/http';

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
    return handler.handle(req);
  }
}