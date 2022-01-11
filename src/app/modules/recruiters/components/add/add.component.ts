import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { patterns } from 'src/app/validators/patterns';
import { RecruiterService } from '../../services/recruiter.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddComponent implements OnInit {
  public form: FormGroup;
  public isLoading: boolean = false;
  showPassword: boolean = false;
  constructor(
    private fb: FormBuilder,
    private cdRef: ChangeDetectorRef,
    private service: RecruiterService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  private initForm(): void {
    this.form = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required]],
        city: ['', [Validators.required]],
        country: ['', [Validators.required]],
        expertiseDomain: ['', [Validators.required]],
        totalExperience: ['', [Validators.required]],
        password: [
          '',
          [Validators.required, Validators.pattern(patterns.STRONG_PASSWORD)],
        ],
      },
      { updateOn: 'blur' }
    );
  }
  public onSubmit(): void {
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }
    this.isLoading = true;
    this.service.addRecruiter(this.form.value).subscribe({
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

  private detectChanges(): void {
    this.cdRef.detectChanges();
  }
}
