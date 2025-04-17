/**
 * AbacatePay SDK para Node.js
 * @module @abacatepay/sdk
 */

import { AbacatePayClient } from './client';
import { PaymentsResource } from './resources/payments';
import { CustomersResource } from './resources/customers';
import { SubscriptionsResource } from './resources/subscriptions';
import { WebhooksResource } from './resources/webhooks';

export interface AbacatePayOptions {
  /**
   * Chave de API da AbacatePay
   */
  apiKey: string;
  
  /**
   * Ambiente da API: 'sandbox' ou 'production'
   * @default 'production'
   */
  environment?: 'sandbox' | 'production';
  
  /**
   * Versão da API
   * @default 'v1'
   */
  apiVersion?: string;
  
  /**
   * Timeout para requisições em milissegundos
   * @default 30000
   */
  timeout?: number;
}

/**
 * Cliente principal do SDK AbacatePay
 */
export class AbacatePay {
  private client: AbacatePayClient;
  
  /**
   * Recurso de pagamentos
   */
  public payments: PaymentsResource;
  
  /**
   * Recurso de clientes
   */
  public customers: CustomersResource;
  
  /**
   * Recurso de assinaturas
   */
  public subscriptions: SubscriptionsResource;
  
  /**
   * Recurso de webhooks
   */
  public webhooks: WebhooksResource;
  
  /**
   * Cria uma nova instância do cliente AbacatePay
   * @param options Opções de configuração
   */
  constructor(options: AbacatePayOptions) {
    this.client = new AbacatePayClient(options);
    
    this.payments = new PaymentsResource(this.client);
    this.customers = new CustomersResource(this.client);
    this.subscriptions = new SubscriptionsResource(this.client);
    this.webhooks = new WebhooksResource(this.client);
  }
}

// Exporta tipos e classes úteis
export * from './types';
export * from './errors'; 