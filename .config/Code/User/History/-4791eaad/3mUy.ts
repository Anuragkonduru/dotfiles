import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('req.url');
  console.log(req.url);
  const reqWitHeader = req.clone({
    withCredentials: true,
  });
  return next(reqWitHeader);
};
