import { Injectable } from '@angular/core';
import { IAdmin } from 'src/app/models/admin/admin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: IAdmin;
  constructor() {
    const cacheData = JSON.parse(localStorage.getItem('credentials'));
    if (cacheData) {
      this.user = cacheData;
    }
  }
}
