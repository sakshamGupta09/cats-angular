import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddComponent implements OnInit {
  form: FormGroup;
  public isLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private service: CandidateService,
    private cdRef: ChangeDetectorRef
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
        jobTitle: ['', [Validators.required]],
        experience: ['', [Validators.required]],
        noticePeriod: ['', [Validators.required]],
        currentSalary: ['', [Validators.required]],
        expectedSalary: ['', [Validators.required]],
        currentCity: ['', [Validators.required]],
        currentCountry: ['', [Validators.required]],
        canRelocate: [false, [Validators.required]],
        skills: ['', [Validators.required]],
      },
      { updateOn: 'blur' }
    );
  }
  public onSubmit(): void {
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }
    this.isLoading = true;
    this.service.addCandidate(this.form.value).subscribe({
      next: () => {
        this.isLoading = false;
        this.detectChanges();
      },
      error: () => {
        this.isLoading = false;
        this.detectChanges();
      },
    });
  }
  private detectChanges(): void {
    this.cdRef.detectChanges();
  }
}
