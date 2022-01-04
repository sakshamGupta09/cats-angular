import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  Observable,
  Subscription,
} from 'rxjs';
import { IsObject } from 'src/app/validators/is-object';
import { JoborderService } from '../../services/joborder.service';

interface IRecruiter {
  _id: string;
  username: string;
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddComponent implements OnInit, OnDestroy {
  public clientId: string;
  public form: FormGroup;
  public isLoading: boolean = false;
  private subscription: Subscription;
  public $recruiters: Observable<IRecruiter[]>;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: JoborderService,
    private cdRed: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchParams();
    this.initForm();
  }
  private fetchParams(): void {
    this.clientId = this.route.snapshot.params?.['clientId'];
  }
  private initForm(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      experience: ['', [Validators.required, Validators.min(0)]],
      skills: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      openings: ['', [Validators.required, Validators.min(1)]],
      recruiter: ['', [Validators.required, IsObject]],
    });
    this.subscribeToChange();
  }
  private subscribeToChange(): void {
    this.subscription = this.form
      .get('recruiter')
      .valueChanges.pipe(
        filter((query: string) => query?.length >= 3),
        debounceTime(900),
        distinctUntilChanged()
      )
      .subscribe({
        next: (value) => {
          this.$recruiters = this.service.getRecruiterByName(value);
          this.detectChanges();
        },
      });
  }
  public onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    const payload = { ...this.form.value };
    payload.recruiterId = payload.recruiter._id;
    delete payload.recruiter;
    this.service.addJoborder(payload, this.clientId).subscribe({
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
  public autocompleteDisplayFn(option): string {
    return option ? option.username : option;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  private detectChanges(): void {
    this.cdRed.detectChanges();
  }
}
