import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const reqWitHeader = req.clone({
    withCredentials: true,
  });
  return next(reqWitHeader);
};
