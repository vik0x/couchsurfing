import { useEffect, useState } from "react";
import { UserResponse } from '@/types/UserResponse';
import { getUserById } from "@/services/user.service";
import { User } from "@/types/User";

const useUserDetails = (userId: number): UserResponse => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState<User | undefined>(undefined);

  useEffect(() => {
    const getData = async () => {
      try {
        const userData = await getUserById(userId);
        setResponse(userData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user details:", error);
        setLoading(false);
      }
    };

    getData();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  return { loading, data: response };
}

export default useUserDetails;
