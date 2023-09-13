import Head from "next/head";
import styles from "./styles.module.scss";
import { Props, ScriptProps } from "next/script";
import React, { ReactNode, useEffect, useState } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  meta?: {
    title?: string;
    description?: string;
  };
}

interface User {
  name: string;
  picture: string;
}

export default function AuthLayout({ children, meta = {} }: AuthLayoutProps) {
  const { title, description } = meta;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const userFromLocalStorage = localStorage.getItem("user");

      if (userFromLocalStorage) {
        const parsedUser: User = JSON.parse(userFromLocalStorage);
        setUser(parsedUser);
      }
    }
  }, []);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.authLayout}>{children}</main>
    </>
  );
}
