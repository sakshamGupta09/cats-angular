export interface IRecruiter {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  expertiseDomain: string;
  totalExperience: number;
  createdAt: Date;
  manager: { username: string };
}
export interface IGetRecruiterResponse {
  statusCode: number;
  message: string;
  data: {
    recruiters: IRecruiter[];
    totalRecords: number;
  };
}
