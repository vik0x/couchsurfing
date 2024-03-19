export interface User{
  id: number;
  full_name: string;
  phone: string;
  email: string;
  friends: number [] | User[];
}