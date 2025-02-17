import React, { useState } from 'react';
import { signup } from "../services/authService";
import styles from '../styles/LoginForm.module.css'; 

interface SignupFormProps {
  onToggleMode: () => void; // Função para alternar entre login e cadastro
}

const SignupForm: React.FC<SignupFormProps> = ({ onToggleMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(name, email, password); // Chama o serviço de cadastro
      console.log("Cadastro bem-sucedido!");
      onToggleMode(); // Alterna para o modo de login após o cadastro
    } catch (err) {
      // Verifica se o erro é uma instância de Error
      if (err instanceof Error) {
        setError(err.message || "Erro ao cadastrar.");
      } else {
        // Se não for uma instância de Error, tratamos como um erro desconhecido
        setError("Ocorreu um erro desconhecido durante o cadastro.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Cadastrar</button>
      <p>Comece a Jornada</p>
    </form>
  );
};

export default SignupForm;