import { AbacatePayClient } from '../client';

/**
 * Tipos para webhooks
 */
export interface Webhook {
  id: string;
  url: string;
  events: string[];
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface WebhookCreateParams {
  url: string;
  events: string[];
  description?: string;
}

/**
 * Recurso para gerenciar webhooks
 */
export class WebhooksResource {
  constructor(private client: AbacatePayClient) {}
  
  /**
   * Cria um novo webhook
   * @param params Parâmetros para criação do webhook
   */
  async create(params: WebhookCreateParams): Promise<Webhook> {
    return this.client.post<Webhook>('/webhooks', params);
  }
  
  /**
   * Obtém um webhook pelo ID
   * @param id ID do webhook
   */
  async get(id: string): Promise<Webhook> {
    return this.client.get<Webhook>(`/webhooks/${id}`);
  }
  
  /**
   * Lista webhooks
   */
  async list(): Promise<{ data: Webhook[], total: number }> {
    return this.client.get<{ data: Webhook[], total: number }>('/webhooks');
  }
  
  /**
   * Remove um webhook
   * @param id ID do webhook
   */
  async delete(id: string): Promise<{ deleted: boolean }> {
    return this.client.delete<{ deleted: boolean }>(`/webhooks/${id}`);
  }
} 