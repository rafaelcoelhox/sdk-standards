import nock from 'nock';
import { AbacatePay } from '../index';
import { Payment } from '../types';

describe('PaymentsResource', () => {
  let client: AbacatePay;
  const baseUrl = 'https://api.sandbox.abacatepay.com';
  
  beforeEach(() => {
    client = new AbacatePay({
      apiKey: 'test_api_key',
      environment: 'sandbox'
    });
    
    nock.disableNetConnect();
  });
  
  afterEach(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });
  
  describe('create', () => {
    it('should create a payment successfully', async () => {
      const paymentData = {
        amount: 1000,
        currency: 'BRL',
        description: 'Test payment',
        customer: {
          name: 'Test Customer',
          email: 'test@example.com'
        }
      };
      
      const responseData: Payment = {
        id: 'pay_123456',
        amount: 1000,
        currency: 'BRL',
        description: 'Test payment',
        status: 'pending',
        paymentMethod: 'credit_card',
        customer: {
          id: 'cus_123456',
          name: 'Test Customer',
          email: 'test@example.com',
          createdAt: '2023-08-15T10:00:00Z',
          updatedAt: '2023-08-15T10:00:00Z'
        },
        createdAt: '2023-08-15T10:00:00Z',
        updatedAt: '2023-08-15T10:00:00Z'
      };
      
      nock(baseUrl)
        .post('/v1/payments', paymentData)
        .reply(200, responseData);
      
      const payment = await client.payments.create(paymentData);
      
      expect(payment).toEqual(responseData);
      expect(payment.id).toBe('pay_123456');
      expect(payment.status).toBe('pending');
    });
  });
  
  // Mais testes para outros métodos...
}); 