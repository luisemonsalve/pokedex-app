import Image from "next/image";

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Image src="/assets/logos/monoma.png" alt="" fill className="image" />
      </div>
      <div className="navbar-title">Pokédex</div>
      <div className="navbar-space"></div>
      <div className="navbar-user">
        <div className="navbar-user-picture"></div>
        <div className="navbar-user-name">User</div>
        <div className="navbar-user-menu">
          <div className="navbar-user-menu-item">Ver perfil</div>
          <div className="navbar-user-menu-item">Cerrar sesión</div>
        </div>
      </div>
    </div>
  );
}
