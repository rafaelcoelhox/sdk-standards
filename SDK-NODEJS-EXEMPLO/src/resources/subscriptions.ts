import { AbacatePayClient } from '../client';
import { Subscription, SubscriptionCreateParams } from '../types';

/**
 * Recurso para gerenciar assinaturas
 */
export class SubscriptionsResource {
  constructor(private client: AbacatePayClient) {}
  
  /**
   * Cria uma nova assinatura
   * @param params Parâmetros para criação da assinatura
   */
  async create(params: SubscriptionCreateParams): Promise<Subscription> {
    return this.client.post<Subscription>('/subscriptions', params);
  }
  
  /**
   * Obtém uma assinatura pelo ID
   * @param id ID da assinatura
   */
  async get(id: string): Promise<Subscription> {
    return this.client.get<Subscription>(`/subscriptions/${id}`);
  }
  
  /**
   * Lista assinaturas
   */
  async list(params?: { limit?: number; offset?: number; customer?: string }): Promise<{ data: Subscription[], total: number }> {
    return this.client.get<{ data: Subscription[], total: number }>('/subscriptions', { params });
  }
  
  /**
   * Cancela uma assinatura
   * @param id ID da assinatura
   */
  async cancel(id: string): Promise<Subscription> {
    return this.client.post<Subscription>(`/subscriptions/${id}/cancel`);
  }
} 