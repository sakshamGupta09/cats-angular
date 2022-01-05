import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import {
  IGetJobordersResponse,
  IJoborder,
  IRecruiterResponse,
} from '../models/model';

@Injectable()
export class JoborderService {
  constructor(private http: HttpClient) {}

  public getJobordersOfClient(clientId: string, payload) {
    return this.http.get<IGetJobordersResponse>(
      `client/joborders/${clientId}`,
      { params: payload }
    );
  }
  public getRecruiterByName(search: string) {
    return this.http
      .get<IRecruiterResponse>(`recruiter/getByName/${search}`)
      .pipe(map((res) => res.data));
  }

  public addJoborder(payload: IJoborder, clientId: string) {
    return this.http.post<IJoborder>(`joborder/create/${clientId}`, payload);
  }
}
