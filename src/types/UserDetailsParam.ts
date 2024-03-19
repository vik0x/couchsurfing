import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export interface UserDetailsParam extends Params {
  id: number
}