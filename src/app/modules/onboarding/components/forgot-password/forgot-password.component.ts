import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnboardingService } from '../../services/onboarding.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: [
    './forgot-password.component.scss',
    '../login/login.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordComponent implements OnInit {
  form: FormGroup;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: OnboardingService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.form = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
      },
      { updateOn: 'blur' }
    );
  }
  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.service.sendPasswordResetLink(this.form.value).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.detectChanges();
      },
      error: (err) => {
        this.isLoading = false;
        this.detectChanges();
      },
    });
  }
  detectChanges(): void {
    this.cdRef.detectChanges();
  }
}
