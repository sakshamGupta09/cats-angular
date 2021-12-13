import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { IClient } from '../../models/model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent implements OnInit {
  clientId: string;
  isLoading: boolean = false;
  client: IClient;
  constructor(
    private service: ClientService,
    private cdRef: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchUrlParams();
    this.getClientDetails();
  }
  private fetchUrlParams(): void {
    this.clientId = this.route.snapshot.params?.['clientId'];
  }
  private getClientDetails(): void {
    this.isLoading = true;
    forkJoin([this.service.getClientById(this.clientId)]).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.client = res[0].data;
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
