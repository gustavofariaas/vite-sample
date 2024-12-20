import api from './api';

export const AuthService = {
  login: async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials);
      const { token, user } = response.data;
      
      localStorage.setItem('@SendNow:token', token);
      localStorage.setItem('@SendNow:user', JSON.stringify(user));
      
      return { token, user };
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Erro ao fazer login');
    }
  },

  logout: () => {
    localStorage.removeItem('@SendNow:token');
    localStorage.removeItem('@SendNow:user');
  },

  getUser: () => {
    const user = localStorage.getItem('@SendNow:user');
    return user ? JSON.parse(user) : null;
  }
};