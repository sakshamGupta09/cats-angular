import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContact, IGetContactsResponse } from '../models/model';

@Injectable()
export class ContactsService {
  constructor(private http: HttpClient) {}

  public getContacts(clientId: string, payload) {
    return this.http.get<IGetContactsResponse>(`contacts/get/${clientId}`, {
      params: payload,
    });
  }
}
