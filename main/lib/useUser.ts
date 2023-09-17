/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { User } from "../types/User";
import { validateToken } from "./auth";
import { useRouter } from "next/router";

export default function useUser({
  redirectTo = "",
  redirectIfFound = false,
} = {}) {
  const router = useRouter();
  try {
    let user: User = {};

    const redirect = () => {
      router.push(redirectTo);
      return { isLoadUser: false };
    };
    user = <User>validateToken();

    useEffect(() => {
      if (
        (!redirectIfFound && !user?.name) ||
        (redirectIfFound && user?.name)
      ) {
        redirect();
      }
    }, [redirect, redirectIfFound, redirectTo, router, user]);

    return { user, isLoadUser: true };
  } catch (error) {
    console.log(error);
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
    return { user: {}, isLoadUser: true };
  }
}
