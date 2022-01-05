export interface IJoborder {
  _id: string;
  title: string;
  experience: string;
  skills: string;
  salary: string;
  city: string;
  country: string;
  openings: number;
  recruiterId: string;
  createdAt: Date;
}
export interface IRecruiter {
  _id: string;
  username: string;
}
export interface IRecruiterResponse {
  statusCode: number;
  message: string;
  data: IRecruiter[];
}
export interface IGetJobordersResponse {
  statusCode: number;
  message: string;
  data: {
    joborders: IJoborder[];
    totalRecords: number;
  };
}
