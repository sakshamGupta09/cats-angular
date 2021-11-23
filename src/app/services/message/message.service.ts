import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  duration: number = 3000;
  constructor(private _snackBar: MatSnackBar) {}

  public showSuccess(message): void {
    this._snackBar.open(message, '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: 'green-snackbar',
      duration: this.duration,
    });
  }
  public showError(message): void {
    this._snackBar.open(message, '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: 'red-snackbar',
      duration: this.duration,
    });
  }
}
