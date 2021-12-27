import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IAddContact,
  IContact,
  IGetContactById,
  IGetContactsResponse,
} from '../models/model';

@Injectable()
export class ContactsService {
  constructor(private http: HttpClient) {}

  public getContacts(clientId: string, payload) {
    return this.http.get<IGetContactsResponse>(`contacts/get/${clientId}`, {
      params: payload,
    });
  }
  public getContactById(contactId: string) {
    return this.http.get<IGetContactById>(`contacts/getById/${contactId}`);
  }
  public addContact(payload: IAddContact) {
    return this.http.post<IAddContact>('contacts/create', payload);
  }
  public updateContact(contactId: string, payload: IAddContact) {
    return this.http.patch<IAddContact>(
      `contacts/update/${contactId}`,
      payload
    );
  }
  public deleteContact(contactId: string) {
    return this.http.delete(`contacts/delete/${contactId}`);
  }
}
