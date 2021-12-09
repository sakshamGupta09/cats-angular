export interface IClient {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  website: string;
  createdAt: Date;
  ownerId: string;
  isActive: boolean;
  owner: { username: string };
}
export interface IGetClientsResponse {
  statusCode: number;
  message: string;
  data: { clients: IClient[]; totalRecords: number };
}
export interface IGetClientById {
  statusCode: number;
  message: string;
  data: IClient;
}
export interface IAddClient {
  name: string;
  email: string;
  phone: string;
  address: string;
  website: string;
}
export interface IUpdateClient {
  name: string;
  email: string;
  phone: string;
  address: string;
  website: string;
  isActive: boolean;
}
