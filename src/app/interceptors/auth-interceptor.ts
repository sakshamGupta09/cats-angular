import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const user = this.auth.getUser();
    if (!user) {
      const newReq = req.clone({
        url: environment.SERVER_URL + req.url,
      });
      return next.handle(newReq);
    }
    const authReq = req.clone({
      setHeaders: { Authorization: user.authToken },
      url: environment.SERVER_URL + req.url,
    });
    return next.handle(authReq);
  }
}
