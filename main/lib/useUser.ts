import { useEffect } from "react";
import Router from "next/router";
import { User } from "../types/User";
import { validateToken } from "./auth";

export default function useUser({
  redirectTo = "",
  redirectIfFound = false,
} = {}) {
  try {
    let user: User = <User>validateToken();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (
        (!redirectIfFound && !user?.name) ||
        (redirectIfFound && user?.name)
      ) {
        Router.push(redirectTo);
      }
    }, [redirectIfFound, redirectTo, user]);

    return { user };
  } catch (error) {
    console.log(error);
  }
}
