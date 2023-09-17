import Head from "next/head";
import styles from "./styles.module.scss";
import React from "react";
import Image from "next/image";

export default function LoadingLayout() {
  return (
    <>
      <Head>
        <title>Cargando | Pokédex Site</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.loadingContainer}>
        <Image
          src={"/assets/icons/pokeball-icon.svg"}
          className={styles.loadingContainerIcon}
          alt=""
          width={30}
          height={30}
        />
        <Image
          src={"/assets/icons/pokeball-icon.svg"}
          className={styles.loadingContainerIcon}
          alt=""
          width={30}
          height={30}
        />
        <Image
          src={"/assets/icons/pokeball-icon.svg"}
          className={styles.loadingContainerIcon}
          alt=""
          width={30}
          height={30}
        />
      </div>
    </>
  );
}
