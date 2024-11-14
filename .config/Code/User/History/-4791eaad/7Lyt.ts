import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log()
  const reqWitHeader = req.clone({
    withCredentials: true,
  });
  return next(reqWitHeader);
};
