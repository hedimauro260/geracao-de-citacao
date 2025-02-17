import api from './api';

export const signup = async (username: string, email: string, password: string) => {
    const response = await api.post('/auth/signup', { username, email, password }); // Certifique-se de que a rota está correta
    return response.data;
};

export const login = async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
};
