import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { patterns } from 'src/app/validators/patterns';
import { IClient } from '../../models/model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditComponent implements OnInit {
  public form: FormGroup;
  private clientId: string;
  public client: IClient;
  public isLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private service: ClientService,
    private cdRef: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchParams();
    this.getClientDetails();
    this.initForm();
  }
  private fetchParams(): void {
    this.clientId = this.route.snapshot.params?.['clientId'];
  }
  private getClientDetails(): void {
    this.isLoading = true;
    this.service.getClientById(this.clientId).subscribe({
      next: (res) => {
        this.client = res.data;
        this.isLoading = false;
        this.fillFormData();
        this.detectChanges();
      },
      error: (err) => {
        this.isLoading = false;
        this.detectChanges();
      },
    });
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      website: ['', [Validators.required, Validators.pattern(patterns.URL)]],
      isActive: [''],
    });
  }
  private fillFormData(): void {
    this.form.setValue({
      name: this.client.name,
      email: this.client.email,
      phone: this.client.phone,
      address: this.client.address,
      website: this.client.website,
      isActive: this.client.isActive,
    });
  }
  public onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.service.updateClient(this.clientId, this.form.value).subscribe({
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
