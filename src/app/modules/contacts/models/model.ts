export interface IContact {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  jobTitle: string;
  department: string;
  createdAt: Date;
  owner: { username: string };
}
export interface IGetContactsResponse {
  statusCode: number;
  message: string;
  data: { contacts: IContact[]; totalRecords: number };
}
export interface IGetContactById {
  statusCode: number;
  message: string;
  data: IContact;
}
export interface IAddContact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  department: string;
  clientId: string;
}
