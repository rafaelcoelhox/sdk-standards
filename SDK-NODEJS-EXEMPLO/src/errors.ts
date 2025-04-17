/**
 * Erro base para todos os erros do SDK
 */
export class AbacatePayError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AbacatePayError';
    
    // Necessário para que instanceof funcione corretamente
    Object.setPrototypeOf(this, AbacatePayError.prototype);
  }
}

/**
 * Erro de autenticação com a API
 */
export class AuthenticationError extends AbacatePayError {
  constructor(message: string = 'Erro de autenticação') {
    super(message);
    this.name = 'AuthenticationError';
    
    Object.setPrototypeOf(this, AuthenticationError.prototype);
  }
}

/**
 * Erro de validação de dados
 */
export class ValidationError extends AbacatePayError {
  errors: Record<string, string[]>;
  
  constructor(message: string = 'Erro de validação', errors: Record<string, string[]> = {}) {
    super(message);
    this.name = 'ValidationError';
    this.errors = errors;
    
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}

/**
 * Erro da API da AbacatePay
 */
export class ApiError extends AbacatePayError {
  statusCode: number;
  data: any;
  
  constructor(message: string = 'Erro na API', statusCode: number = 500, data: any = null) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.data = data;
    
    Object.setPrototypeOf(this, ApiError.prototype);
  }
} 