const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const { AbacatePay } = require('@abacatepay/sdk');

const app = express();
const port = 3000;
const webhookSecret = 'seu_webhook_secret';

// Inicialize o cliente AbacatePay
const client = new AbacatePay({
  apiKey: 'sua_chave_api',
  environment: 'sandbox'
});

// Middleware para verificar assinatura do webhook
function verifyWebhookSignature(req, res, next) {
  const signature = req.headers['x-abacatepay-signature'];
  const payload = JSON.stringify(req.body);
  
  const hmac = crypto.createHmac('sha256', webhookSecret);
  hmac.update(payload);
  const expectedSignature = hmac.digest('hex');
  
  if (signature === expectedSignature) {
    next();
  } else {
    res.status(401).json({ error: 'Assinatura inválida' });
  }
}

app.use(bodyParser.json());

// Rota para receber webhooks
app.post('/webhooks', verifyWebhookSignature, async (req, res) => {
  const event = req.body;
  
  console.log(`Evento recebido: ${event.type}`);
  
  try {
    // Processa diferentes tipos de eventos
    switch (event.type) {
      case 'payment.succeeded':
        await handlePaymentSucceeded(event.data);
        break;
      case 'payment.failed':
        await handlePaymentFailed(event.data);
        break;
      case 'subscription.created':
        await handleSubscriptionCreated(event.data);
        break;
      default:
        console.log(`Evento não tratado: ${event.type}`);
    }
    
    res.status(200).json({ received: true });
  } catch (error) {
    console.error('Erro ao processar webhook:', error);
    res.status(500).json({ error: 'Erro ao processar webhook' });
  }
});

async function handlePaymentSucceeded(data) {
  const payment = data.payment;
  console.log(`Pagamento ${payment.id} confirmado no valor de ${payment.amount / 100} ${payment.currency}`);
  
  // Implemente sua lógica de negócio aqui
  // Por exemplo, atualizar status do pedido, enviar email de confirmação, etc.
}

async function handlePaymentFailed(data) {
  const payment = data.payment;
  console.log(`Pagamento ${payment.id} falhou: ${payment.failureReason}`);
  
  // Implemente sua lógica de negócio aqui
}

async function handleSubscriptionCreated(data) {
  const subscription = data.subscription;
  console.log(`Assinatura ${subscription.id} criada para o cliente ${subscription.customer.name}`);
  
  // Implemente sua lógica de negócio aqui
}

app.listen(port, () => {
  console.log(`Servidor de webhook rodando na porta ${port}`);
}); 