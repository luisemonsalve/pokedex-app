import { useRouter } from "next/router";
import styles from "./styles.module.scss";

export default function SignIn() {
  const router = useRouter();

  const validateAuth = () => {
    router.push("/dashboard");
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        <h1 className="fs-3 is-color-red ">Pokédex</h1>
        <span className="is-size-2 is-extrabold text-uppercase">
          Inicio de sesión
        </span>
      </div>
      <div className={styles.cardContent}>
        <div className="field">
          <label className="label">Correo electrónico</label>
          <input
            className="input"
            name="email"
            type="email"
            aria-label="email"
            placeholder="Ingresa email"
          />
          <span className="input-error">Error</span>
        </div>
        <div className="field">
          <label className="label">Contraseña</label>
          <input
            className="input"
            type="password"
            name="password"
            aria-label="password"
            placeholder="Ingrega la contraseña"
          />
          <span className="input-error">Error</span>
        </div>
      </div>
      <div className={styles.cardBottom}>
        <button className="btn" onClick={validateAuth}>
          Iniciar sesión
        </button>
      </div>
    </div>
  );
}