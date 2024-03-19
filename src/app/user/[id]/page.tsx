'use client'
import { UserDetailsParam } from "@/types/UserDetailsParam";
import { useParams } from "next/navigation";
import { Suspense } from "react";
import useUserDetails from "./hooks/useUserDetails";
import Details from "../../../components/User/Details";

const User = () => {
  const params = useParams<UserDetailsParam>();
  const { loading, data: user } = useUserDetails(Number(params.id));

  return (
    <Suspense fallback="Loading">
      {user && <Details {...user} />}
    </Suspense>
  );

}
export default User;