import Image from "next/image";
import { logout } from "../../lib/auth";
import { User } from "@/main/types/User";
import Link from "next/link";

interface NavbarProps {
  user?: User;
}

export default function Navbar({ user }: NavbarProps) {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Image src="/assets/logos/monoma.png" alt="" fill className="image" />
      </div>
      <div className="navbar-title">
        <Link href={"/dashboard"}>Pokédex</Link>
      </div>
      <div className="navbar-space"></div>
      <div className="navbar-user">
        <div className="navbar-user-picture">
          <Image
            alt="avatar"
            src={user?.picture || ""}
            className="image"
            fill
          />
        </div>
        <div className="navbar-user-name">{user?.name}</div>
        <span className="navbar-user-icon"></span>
        <div className="navbar-user-menu">
          <div className="navbar-user-menu-item">
            <Link href={"/perfil"}>Ver perfil</Link>
          </div>
          <div className="navbar-user-menu-item" onClick={logout}>
            Cerrar sesión
          </div>
        </div>
      </div>
    </div>
  );
}
