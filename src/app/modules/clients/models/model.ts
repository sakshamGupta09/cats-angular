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
  owner: Array<{ firstName: string; lastName: string }>;
}
