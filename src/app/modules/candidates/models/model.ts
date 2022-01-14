export interface ICandidate {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  experience: number;
  noticePeriod: number;
  currentSalary: string;
  expectedSalary: string;
  currentCity: string;
  currentCountry: string;
  canRelocate: boolean;
  skills: string;
  createdAt: Date;
  username: string;
  owner: { username: string };
}
export interface IGetCandidateResponse {
  statusCode: number;
  message: string;
  data: { candidates: Array<ICandidate>; totalRecords: number };
}
