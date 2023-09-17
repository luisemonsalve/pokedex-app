import Router from "next/router";
import { User } from "../types/User";
import jwt from "jsonwebtoken";

const privateKey = <string>process.env.NEXT_PUBLIC_TOKEN_PRIVATE_KEY;

export const validateToken = () => {
  try {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        var decoded = <{ user: User }>jwt.verify(token, privateKey);
        return decoded?.user;
      }
    }
  } catch (err) {
    console.log(err);

    return {};
  }
};

export const loginUser = (user: User) => {
  try {
    var token = jwt.sign({ user }, privateKey, {
      expiresIn: "1h",
    });
    localStorage.setItem("token", token);
    Router.push("/dashboard");
  } catch (error) {
    console.error("Error al firmar el token:", error);
  }
};

export const logout = () => {
  localStorage.clear();
  Router.push("/");
};
