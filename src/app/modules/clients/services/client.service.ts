import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAddClient, IGetClientsResponse } from '../models/model';

@Injectable()
export class ClientService {
  constructor(private http: HttpClient) {}

  getClients(payload) {
    return this.http.get<IGetClientsResponse>('client/get', {
      params: payload,
    });
  }
  public addClient(payload: IAddClient) {
    return this.http.post<IAddClient>('client/create', payload);
  }
}
