import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGetCandidateResponse } from '../models/model';

@Injectable()
export class CandidateService {
  constructor(private http: HttpClient) {}

  public getCanidates(payload) {
    return this.http.get<IGetCandidateResponse>('candidate/get', {
      params: payload,
    });
  }
  public deleteCanidate(candidateId) {
    return this.http.delete(`candidate/delete/${candidateId}`);
  }
  public addCandidate(payload) {
    return this.http.post('candidate/create', payload);
  }
}
