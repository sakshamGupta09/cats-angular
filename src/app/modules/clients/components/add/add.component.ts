import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { patterns } from 'src/app/validators/patterns';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddComponent implements OnInit {
  public form: FormGroup;
  public isLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private service: ClientService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required]],
        address: ['', [Validators.required]],
        website: ['', [Validators.required, Validators.pattern(patterns.URL)]],
      },
      { updateOn: 'blur' }
    );
  }
  public onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.service.addClient(this.form.value).subscribe({
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
