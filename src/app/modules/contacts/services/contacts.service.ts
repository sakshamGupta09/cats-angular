import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAddContact, IContact, IGetContactsResponse } from '../models/model';

@Injectable()
export class ContactsService {
  constructor(private http: HttpClient) {}

  public getContacts(clientId: string, payload) {
    return this.http.get<IGetContactsResponse>(`contacts/get/${clientId}`, {
      params: payload,
    });
  }
  public addContact(payload: IAddContact) {
    return this.http.post<IAddContact>('contacts/create', payload);
  }
}
