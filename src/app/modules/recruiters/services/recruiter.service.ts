import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGetRecruiterResponse } from '../models/model';

@Injectable()
export class RecruiterService {
  constructor(private http: HttpClient) {}

  public getRecruiters(payload) {
    return this.http.get<IGetRecruiterResponse>('recruiter/get', {
      params: payload,
    });
  }
  public deleteRecruiter(recruiterId: string) {
    return this.http.delete(`recruiter/delete/${recruiterId}`);
  }
}
