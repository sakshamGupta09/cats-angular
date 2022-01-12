import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IRecruiter } from '../../models/model';
import { RecruiterService } from '../../services/recruiter.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditComponent implements OnInit {
  public form: FormGroup;
  public isLoading: boolean = false;
  public recruiterId: string;
  private recruiter: IRecruiter;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private cdRef: ChangeDetectorRef,
    private service: RecruiterService
  ) {}

  ngOnInit(): void {
    this.fetchUrlParams();
    this.initForm();
  }

  private fetchUrlParams(): void {
    this.recruiterId = this.route.snapshot.params?.['recruiterId'];
    this.getRecruiterDetails();
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
      },
      { updateOn: 'blur' }
    );
  }
  private fillForm(): void {
    this.form.setValue({
      firstName: this.recruiter.firstName,
      lastName: this.recruiter.lastName,
      email: this.recruiter.email,
      phone: this.recruiter.phone,
      city: this.recruiter.city,
      country: this.recruiter.country,
      expertiseDomain: this.recruiter.expertiseDomain,
      totalExperience: this.recruiter.totalExperience,
    });
  }
  private getRecruiterDetails(): void {
    this.isLoading = true;
    this.service.getRecruiterById(this.recruiterId).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.recruiter = res.data;
        this.fillForm();
        this.detectChanges();
      },
      error: (err) => {
        this.isLoading = false;
        this.detectChanges();
      },
    });
  }
  public onSubmit(): void {
    this.isLoading = true;
    this.service.updateRecruiter(this.recruiterId, this.form.value).subscribe({
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
