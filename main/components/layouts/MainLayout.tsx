import Head from "next/head";
import styles from "./styles.module.scss";
import React, { ReactNode } from "react";
import Navbar from "../ui/Navbar";

interface MainLayoutProps {
  children: ReactNode;
  meta?: {
    title?: string;
    description?: string;
  };
}

export default function MainLayout({ children, meta = {} }: MainLayoutProps) {
  const { title, description } = meta;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainLayout}>
        <Navbar />
        <div className={styles.mainLayoutContent}>{children}</div>
      </main>
    </>
  );
}
