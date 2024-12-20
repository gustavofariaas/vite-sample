import { Home, MessageCircle, Mic, Image, FileText, Filter, Zap } from 'lucide-react';

export const MENU_ITEMS = [
  { id: 'início', icon: Home, text: 'Início' },
  { id: 'mensagens', icon: MessageCircle, text: 'Mensagens' },
  { id: 'audios', icon: Mic, text: 'Áudios' },
  { id: 'midias', icon: Image, text: 'Mídias' },
  { id: 'documentos', icon: FileText, text: 'Documentos' },
  { id: 'funis', icon: Filter, text: 'Funis' },
  { id: 'gatilhos', icon: Zap, text: 'Gatilhos' }
];

export const MOCK_ACTIVITIES = [
  { text: 'Nova mensagem recebida', time: 'Agora' },
  { text: 'Documento compartilhado', time: '2min' },
  { text: 'Novo áudio enviado', time: '5min' }
];

export const PERFORMANCE_METRICS = [
  { label: 'Taxa de Resposta', value: '98%', width: '98%' },
  { label: 'Tempo Médio', value: '1.5min', width: '85%' }
];