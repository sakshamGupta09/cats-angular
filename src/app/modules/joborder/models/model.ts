export interface IJoborder {
  title: string;
  experience: string;
  skills: string;
  salary: string;
  city: string;
  country: string;
  openings: number;
  recruiterId: string;
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
