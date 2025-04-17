import { AbacatePayClient } from '../client';
import { Payment, PaymentCreateParams, PaymentListParams } from '../types';

/**
 * Recurso para gerenciar pagamentos
 */
export class PaymentsResource {
  constructor(private client: AbacatePayClient) {}
  
  /**
   * Cria um novo pagamento
   * @param params Parâmetros para criação do pagamento
   */
  async create(params: PaymentCreateParams): Promise<Payment> {
    return this.client.post<Payment>('/payments', params);
  }
  
  /**
   * Obtém um pagamento pelo ID
   * @param id ID do pagamento
   */
  async get(id: string): Promise<Payment> {
    return this.client.get<Payment>(`/payments/${id}`);
  }
  
  /**
   * Lista pagamentos com filtros opcionais
   * @param params Parâmetros para listagem
   */
  async list(params?: PaymentListParams): Promise<{ data: Payment[], total: number }> {
    return this.client.get<{ data: Payment[], total: number }>('/payments', { params });
  }
  
  /**
   * Cancela um pagamento
   * @param id ID do pagamento
   */
  async cancel(id: string): Promise<Payment> {
    return this.client.post<Payment>(`/payments/${id}/cancel`);
  }
  
  /**
   * Reembolsa um pagamento
   * @param id ID do pagamento
   * @param amount Valor a ser reembolsado (opcional, reembolsa o valor total se não especificado)
   */
  async refund(id: string, amount?: number): Promise<Payment> {
    return this.client.post<Payment>(`/payments/${id}/refund`, { amount });
  }
} 