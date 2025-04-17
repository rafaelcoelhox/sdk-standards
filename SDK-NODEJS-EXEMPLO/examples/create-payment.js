const { AbacatePay } = require('@abacatepay/sdk');

// Inicialize o cliente com sua chave de API
const client = new AbacatePay({
  apiKey: 'sua_chave_api',
  environment: 'sandbox' // Use 'production' para ambiente de produção
});

async function createPayment() {
  try {
    // Crie um pagamento
    const payment = await client.payments.create({
      amount: 1000, // R$ 10,00
      currency: 'BRL',
      description: 'Compra de produto',
      paymentMethod: 'credit_card',
      customer: {
        name: 'João Silva',
        email: 'joao@exemplo.com',
        taxId: '123.456.789-00' // CPF
      }
    });
    
    console.log('Pagamento criado com sucesso:');
    console.log(`ID: ${payment.id}`);
    console.log(`Status: ${payment.status}`);
    console.log(`Valor: ${payment.amount / 100} ${payment.currency}`);
    
    return payment;
  } catch (error) {
    console.error('Erro ao criar pagamento:');
    
    if (error.name === 'ValidationError') {
      console.error('Erro de validação:', error.errors);
    } else if (error.name === 'AuthenticationError') {
      console.error('Erro de autenticação. Verifique sua chave de API.');
    } else {
      console.error(error.message);
    }
  }
}

createPayment(); 