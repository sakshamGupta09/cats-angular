import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IContact } from '../../models/model';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditComponent implements OnInit {
  public form: FormGroup;
  private contactId: string;
  public contact: IContact;
  public isLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private service: ContactsService,
    private cdRef: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchParams();
    this.initForm();
  }
  private fetchParams(): void {
    this.contactId = this.route.snapshot.params?.['contactId'];
    this.getContactDetails();
  }
  private getContactDetails(): void {
    this.isLoading = true;
    this.service.getContactById(this.contactId).subscribe({
      next: (res) => {
        this.contact = res.data;
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
    this.form = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required]],
        jobTitle: ['', [Validators.required]],
        department: ['', [Validators.required]],
      },
      { updateOn: 'blur' }
    );
  }
  private fillFormData(): void {
    this.form.setValue({
      firstName: this.contact.firstName,
      lastName: this.contact.lastName,
      email: this.contact.email,
      phone: this.contact.phone,
      jobTitle: this.contact.jobTitle,
      department: this.contact.department,
    });
  }
  public onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.service.updateContact(this.contactId, this.form.value).subscribe({
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
