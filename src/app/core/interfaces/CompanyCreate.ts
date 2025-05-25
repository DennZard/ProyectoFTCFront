export interface CompanyCreate {
  name: string;
  owner: {
    email: String;
    password: String;
  };
}
