import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export function matchField(field1: string, field2: string) {
  return (group: FormGroup): ValidationErrors | null => {
    const control1 = group.controls[field1];
    const control2 = group.controls[field2];
    return control1 &&
      control2 &&
      control1.value &&
      control2.value &&
      control1.value !== control2.value
      ? { isMatching: true }
      : null;
  };
}
