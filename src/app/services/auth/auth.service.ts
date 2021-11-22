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
  public getUser(): IAdmin {
    return this.user;
  }
  public updateUser(user: IAdmin): void {
    this.user = user;
    localStorage.setItem('credentials', JSON.stringify(user));
  }
  public logout(): void {
    this.user = null;
  }
}
