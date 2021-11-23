import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { MessageService } from '../services/message/message.service';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(private message: MessageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            if (req.method != 'GET') {
              this.message.showSuccess(event.body.message);
            }
          }
        },
        error: (error) => {
          if (error instanceof HttpErrorResponse) {
            this.message.showError(error.error.message);
          }
        },
      })
    );
  }
}
