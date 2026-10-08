import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [mode, setMode] = useState("signup");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { signUp, user, logout, login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setError(null);
    let result;
    if (mode === "signup") {
      result = signUp(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }

    if (result.success) {
      navigate("/");
    } else {
      setError(result.error);
    }
    console.log(result);
  }

  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          {user && <p>Usuário criado com sucesso: {user.email}</p>}
          <button onClick={() => logout()}>Sair</button>
          <h1 className="page-title">
            {mode === "signup" ? "Criar Conta" : "Entrar"}
          </h1>
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            {error && <div className="error-message">{error}</div>}
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="form-input"
                id="email"
                {...register("email", { required: "Introduza o email" })}
              />
              {errors.email && (
                <span className="form-error">{errors.email.message}</span>
              )}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Palavra Passe
              </label>
              <input
                {...register("password", {
                  required: "Introduza a palavra passe",
                  minLength: {
                    value: 6,
                    message:
                      "A palavra passe deve conter pelo menos 6 caracteres",
                  },
                  maxLength: {
                    value: 12,
                    message:
                      "A palavra passe deve conter no máximo 12 caracteres",
                  },
                })}
                className="form-input"
                type="password"
                id="password"
              />
              {errors.password && (
                <span className="form-error">{errors.password.message}</span>
              )}
            </div>

            <button type="submit" className="btn btn-primary btn-large">
              {mode === "signup" ? "Criar Conta" : "Entrar"}
            </button>
          </form>

          <div className="auth-switch">
            {mode === "signup" ? (
              <p>
                Já tens uma conta?{" "}
                <span className="auth-link" onClick={() => setMode("login")}>
                  Entrar
                </span>
              </p>
            ) : (
              <p>
                Não tens uma conta?{" "}
                <span className="auth-link" onClick={() => setMode("signup")}>
                  Criar Conta
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
