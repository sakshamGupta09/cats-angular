import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IClient } from '../models/model';

@Injectable()
export class ClientService {
  constructor(private http: HttpClient) {}

  getClients(payload) {
    return this.http.get<{
      statusCode: number;
      message: string;
      data: IClient[];
    }>('client/get', {
      params: payload,
    });
  }
}
