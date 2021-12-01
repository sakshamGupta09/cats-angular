import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { OnboardingService } from '../../services/onboarding.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private service: OnboardingService,
    private auth: AuthService,
    private cdRef: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.form = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
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
    this.service.loginUser(this.form.value).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        this.auth.updateUser(res.data);
        this.router.navigateByUrl('/app/client/listing');
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
