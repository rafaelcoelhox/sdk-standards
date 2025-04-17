import { AbacatePayClient } from '../client';
import { Customer, CustomerCreateParams } from '../types';

/**
 * Recurso para gerenciar clientes
 */
export class CustomersResource {
  constructor(private client: AbacatePayClient) {}
  
  /**
   * Cria um novo cliente
   * @param params Parâmetros para criação do cliente
   */
  async create(params: CustomerCreateParams): Promise<Customer> {
    return this.client.post<Customer>('/customers', params);
  }
  
  /**
   * Obtém um cliente pelo ID
   * @param id ID do cliente
   */
  async get(id: string): Promise<Customer> {
    return this.client.get<Customer>(`/customers/${id}`);
  }
  
  /**
   * Lista clientes
   */
  async list(params?: { limit?: number; offset?: number }): Promise<{ data: Customer[], total: number }> {
    return this.client.get<{ data: Customer[], total: number }>('/customers', { params });
  }
  
  /**
   * Atualiza um cliente
   * @param id ID do cliente
   * @param data Dados a serem atualizados
   */
  async update(id: string, data: Partial<CustomerCreateParams>): Promise<Customer> {
    return this.client.put<Customer>(`/customers/${id}`, data);
  }
} 