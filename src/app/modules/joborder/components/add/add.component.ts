import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddComponent implements OnInit {
  public clientId: string;
  public form: FormGroup;
  public isLoading: boolean = false;
  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.fetchParams();
    this.initForm();
  }
  private fetchParams(): void {
    this.clientId = this.route.snapshot.params?.['clientId'];
  }
  private initForm(): void {
    this.form = this.fb.group(
      {
        title: ['', [Validators.required]],
        experience: ['', [Validators.required, Validators.min(0)]],
        skills: ['', [Validators.required]],
        salary: ['', [Validators.required]],
        city: ['', [Validators.required]],
        country: ['', [Validators.required]],
        openings: ['', [Validators.required, Validators.min(1)]],
        recruiterId: ['', [Validators.required]],
      },
      { updateOn: 'blur' }
    );
  }
  public onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
  }
}
