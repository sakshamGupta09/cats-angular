import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { matchField } from 'src/app/validators/cross-field';
import { patterns } from 'src/app/validators/patterns';
import { OnboardingService } from '../../services/onboarding.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: [
    './reset-password.component.scss',
    '../login/login.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordComponent implements OnInit {
  form: FormGroup;
  userId: string;
  isLoading: boolean = false;
  showPassword: boolean = false;
  showRepeatPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: OnboardingService,
    private auth: AuthService,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchParams();
    this.initForm();
  }
  private fetchParams(): void {
    this.userId = this.route.snapshot.params?.['userId'];
  }
  initForm(): void {
    this.form = this.fb.group(
      {
        password: [
          '',
          [Validators.required, Validators.pattern(patterns.STRONG_PASSWORD)],
        ],
        repeat: ['', [Validators.required]],
      },
      { updateOn: 'blur', validators: matchField('password', 'repeat') }
    );
  }
  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    const payload = {
      password: this.form.get('password').value,
      userId: this.userId,
    };
    this.service.resetPassword(payload).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        this.detectChanges();
      },
      error: (error) => {
        this.isLoading = false;
        this.detectChanges();
      },
    });
  }
  detectChanges(): void {
    this.cdRef.detectChanges();
  }
}
