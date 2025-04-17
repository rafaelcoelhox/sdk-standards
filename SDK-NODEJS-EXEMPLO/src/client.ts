import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { AbacatePayOptions } from './index';
import { ApiError, AuthenticationError, ValidationError } from './errors';

/**
 * Cliente HTTP para comunicação com a API da AbacatePay
 * @internal
 */
export class AbacatePayClient {
  private api: AxiosInstance;
  private baseUrl: string;
  
  constructor(options: AbacatePayOptions) {
    const { apiKey, environment = 'production', apiVersion = 'v1', timeout = 30000 } = options;
    
    this.baseUrl = environment === 'sandbox' 
      ? 'https://api.sandbox.abacatepay.com' 
      : 'https://api.abacatepay.com';
    
    this.api = axios.create({
      baseURL: `${this.baseUrl}/${apiVersion}`,
      timeout,
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'User-Agent': `AbacatePay-Node/${require('../package.json').version}`
      }
    });
    
    // Interceptor para tratamento de erros
    this.api.interceptors.response.use(
      response => response,
      error => {
        if (error.response) {
          const { status, data } = error.response;
          
          if (status === 401) {
            throw new AuthenticationError('Credenciais inválidas ou expiradas');
          }
          
          if (status === 400) {
            throw new ValidationError(data.message || 'Erro de validação', data.errors);
          }
          
          throw new ApiError(
            data.message || 'Erro na API da AbacatePay',
            status,
            data
          );
        }
        
        throw new ApiError('Erro de conexão com a API da AbacatePay');
      }
    );
  }
  
  /**
   * Realiza uma requisição GET
   * @param path Caminho da API
   * @param config Configurações adicionais
   */
  async get<T>(path: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.api.get<T>(path, config);
    return response.data;
  }
  
  /**
   * Realiza uma requisição POST
   * @param path Caminho da API
   * @param data Dados a serem enviados
   * @param config Configurações adicionais
   */
  async post<T>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.api.post<T>(path, data, config);
    return response.data;
  }
  
  /**
   * Realiza uma requisição PUT
   * @param path Caminho da API
   * @param data Dados a serem enviados
   * @param config Configurações adicionais
   */
  async put<T>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.api.put<T>(path, data, config);
    return response.data;
  }
  
  /**
   * Realiza uma requisição DELETE
   * @param path Caminho da API
   * @param config Configurações adicionais
   */
  async delete<T>(path: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.api.delete<T>(path, config);
    return response.data;
  }
} 