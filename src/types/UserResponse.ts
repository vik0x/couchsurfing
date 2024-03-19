import { User } from "./User";

export interface UserResponse {
  loading: boolean,
  data: User | undefined,
}