import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGetByIdResponse, IGetRecruiterResponse } from '../models/model';

@Injectable()
export class RecruiterService {
  constructor(private http: HttpClient) {}

  public getRecruiters(payload) {
    return this.http.get<IGetRecruiterResponse>('recruiter/get', {
      params: payload,
    });
  }
  public getRecruiterById(recruiterId: string) {
    return this.http.get<IGetByIdResponse>(`recruiter/getById/${recruiterId}`);
  }
  public deleteRecruiter(recruiterId: string) {
    return this.http.delete(`recruiter/delete/${recruiterId}`);
  }
  public addRecruiter(payload) {
    return this.http.post('recruiter/create', payload);
  }
  public updateRecruiter(recruiterId: string, payload: Object) {
    return this.http.patch(`recruiter/update/${recruiterId}`, payload);
  }
}
