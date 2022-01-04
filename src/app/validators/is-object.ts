import { AbstractControl, ValidationErrors } from '@angular/forms';

export function IsObject(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (value && typeof value != 'object') {
    return { notAnObject: true };
  }
  return null;
}
