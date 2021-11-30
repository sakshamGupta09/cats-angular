import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { patterns } from 'src/app/validators/patterns';
import { OnboardingService } from '../../services/onboarding.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../login/login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  showPassword: boolean = false;
  isLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private service: OnboardingService,
    private auth: AuthService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.form = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required]],
        password: [
          '',
          [Validators.required, Validators.pattern(patterns.STRONG_PASSWORD)],
        ],
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
    this.service.signup(this.form.value).subscribe({
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
