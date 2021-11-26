import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OnboardingService {
  constructor(private http: HttpClient) {}

  loginUser(payload): Observable<unknown> {
    return this.http.post('admin/login', payload);
  }
  sendPasswordResetLink(payload): Observable<unknown> {
    return this.http.post('admin/resetPassword', payload);
  }
}
