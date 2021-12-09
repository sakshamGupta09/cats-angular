import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  IAddClient,
  IGetClientById,
  IGetClientsResponse,
  IUpdateClient,
} from '../models/model';

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
  public getClientById(clientId: string) {
    return this.http.get<IGetClientById>(`client/getById/${clientId}`);
  }
  public updateClient(clientId: string, payload: IUpdateClient) {
    return this.http.patch<IUpdateClient>(`client/update/${clientId}`, payload);
  }
}
