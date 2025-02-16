import React, { useState } from 'react';
import styles from '../styles/LoginForm.module.css';

interface LoginFormProps {
    onLogin: (email: string, password: string) => void;
}   

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLogin(email, password);
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
            <button type="submit">Entrar</button>
            <p>Entrar na sua jornada</p>
        </form>
    );
};

export default LoginForm;