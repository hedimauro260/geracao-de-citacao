import React, { useState } from 'react';
import { login } from "../services/authService";
import styles from '../styles/LoginForm.module.css';

interface LoginFormProps {
    onToggleMode: () => void; // Propriedade para alternar entre login e cadastro
    onLoginSuccess?: () => void; // Propriedade para lidar com o sucesso do login
}   

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await login(email, password);
            console.log("Login bem-sucedido:", response);
            // Você pode redirecionar o usuário ou armazenar o token no localStorage aqui
            // Chama a função de sucesso do login (se fornecida)
            if (onLoginSuccess) {
                onLoginSuccess();
            }
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
            <a href="#">Esqueceu a Senha?</a>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">Entrar</button>
            <p>Entrar na sua jornada</p>
            {/* <button type="button" onClick={onToggleMode}>Criar conta</button> */}
        </form>
    );
};
export default LoginForm;