/**
 * Tipos comuns usados no SDK
 */

/**
 * Status possíveis de um pagamento
 */
export type PaymentStatus = 
  | 'pending'
  | 'processing'
  | 'authorized'
  | 'paid'
  | 'refused'
  | 'refunded'
  | 'canceled';

/**
 * Métodos de pagamento suportados
 */
export type PaymentMethod = 
  | 'credit_card'
  | 'debit_card'
  | 'boleto'
  | 'pix';

/**
 * Informações de um cliente
 */
export interface Customer {
  id: string;
  name: string;
  email: string;
  taxId?: string;
  phone?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Parâmetros para criar um cliente
 */
export interface CustomerCreateParams {
  name: string;
  email: string;
  taxId?: string;
  phone?: string;
}

/**
 * Informações de um pagamento
 */
export interface Payment {
  id: string;
  amount: number;
  currency: string;
  description: string;
  status: PaymentStatus;
  paymentMethod: PaymentMethod;
  customer: Customer;
  metadata?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

/**
 * Parâmetros para criar um pagamento
 */
export interface PaymentCreateParams {
  amount: number;
  currency: string;
  description: string;
  paymentMethod?: PaymentMethod;
  customer: CustomerCreateParams | string;
  metadata?: Record<string, any>;
}

/**
 * Parâmetros para listar pagamentos
 */
export interface PaymentListParams {
  limit?: number;
  offset?: number;
  status?: PaymentStatus;
  customer?: string;
  startDate?: string;
  endDate?: string;
}

/**
 * Informações de uma assinatura
 */
export interface Subscription {
  id: string;
  status: 'active' | 'canceled' | 'paused';
  planId: string;
  customer: Customer;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  canceledAt?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Parâmetros para criar uma assinatura
 */
export interface SubscriptionCreateParams {
  planId: string;
  customer: CustomerCreateParams | string;
  paymentMethod: PaymentMethod;
  metadata?: Record<string, any>;
} 