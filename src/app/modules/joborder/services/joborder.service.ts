import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IJoborder } from '../models/model';

@Injectable()
export class JoborderService {
  constructor(private http: HttpClient) {}

  public getJobordersOfClient(clientId: string, payload) {
    this.http.get(`client/joborders/${clientId}`, { params: payload });
  }
  public addJoborder(payload: IJoborder) {
    this.http.post<IJoborder>('joborder/create', payload);
  }
}
