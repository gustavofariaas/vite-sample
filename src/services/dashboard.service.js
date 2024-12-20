import api from './api';

export const DashboardService = {
  getStatistics: async () => {
    try {
      const response = await api.get('/dashboard/statistics');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Erro ao buscar estatísticas');
    }
  },

  getRecentActivities: async () => {
    try {
      const response = await api.get('/dashboard/activities');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Erro ao buscar atividades recentes');
    }
  },

  getPerformanceMetrics: async () => {
    try {
      const response = await api.get('/dashboard/performance');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Erro ao buscar métricas de desempenho');
    }
  }
};