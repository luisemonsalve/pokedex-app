import styles from "./styles.module.scss";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "@/main/lib/auth";
import { User } from "@/main/types/User";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const emailRegex = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm"
  );

  interface Res {
    user?: User;
    valid: boolean;
    message: boolean;
  }

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      if (!isValidEmail || !email || !password) {
        setIsLoading(false);
        return;
      }
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = (await res.json()) as Res;

      const { user, valid, message } = data;

      if (!valid || !user) {
        toast(message, {
          hideProgressBar: true,
          autoClose: 3000,
          type: "error",
          position: "bottom-right",
        });
      } else {
        loginUser(user);
        toast(message, {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
          position: "bottom-right",
        });
      }
    } catch (error) {
      console.log(error);
      toast("Ha ocurrido un error", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
      });
    }
    setIsLoading(false);
  };

  const validateEmail = () => {
    const isValid = emailRegex.test(email);
    setIsValidEmail(isValid);
  };

  useEffect(() => {
    validateEmail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);
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
          <div className="input">
            <input
              name="email"
              type="email"
              aria-label="email"
              placeholder="Ingresa email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
          </div>
          {!isValidEmail && (
            <span className="input-error">Debes ingresar un email válido</span>
          )}
        </div>
        <div className="field">
          <label className="label">Contraseña</label>
          <div className="input">
            <input
              id="password"
              type={showPass ? "text" : "password"}
              name="password"
              aria-label="password"
              placeholder="Ingrega la contraseña"
              value={password}
              onKeyDown={handleLogin}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <span
              className={`icon ${showPass ? "is-open" : ""}`}
              onClick={() => setShowPass(!showPass)}
            ></span>
          </div>

          <span className="input-error"></span>
        </div>
      </div>
      <div className={styles.cardBottom}>
        <button
          className={`btn ${isLoading ? "is-loading" : ""}`}
          onClick={handleLogin}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
