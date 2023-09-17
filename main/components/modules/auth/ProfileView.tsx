import styles from "./styles.module.scss";
import Image from "next/image";
import { User } from "@/main/types/User";

interface ProfileViewProps {
  user?: User;
}

export default function ProfileView({ user }: ProfileViewProps) {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileImage}>
        <Image alt="" fill src={user?.picture || ""} className="image"></Image>
      </div>
      <div className={styles.profileContent}>
        <span>Nombre:</span>
        {user?.name}
        <div></div>
        <div></div>
        <span>Email:</span>
        {user?.email}
      </div>
    </div>
  );
}
