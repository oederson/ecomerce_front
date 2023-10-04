import React, { useEffect } from 'react';
import { initMercadoPago, Payment } from '@mercadopago/sdk-react';
import { processPayment } from '../services/mercadoPago';

const PaginaPagamento = () => {
  useEffect(() => {
    initMercadoPago();
  }, []);

  const onSubmit = async ({ selectedPaymentMethod, formData }) => {
    try {
      await processPayment(formData);
      // Redirecionar ou exibir mensagem de sucesso
    } catch (error) {
      console.error('Erro ao processar pagamento:', error);
      // Exibir mensagem de erro ou lidar com o erro de alguma forma
    }
  };

  const onError = async (error) => {
    console.error('Erro no Brick:', error);
    // Lidar com o erro de alguma forma
  };

  const onReady = async () => {
    // Executar ações quando o Brick estiver pronto
  };

  const initialization = {
    amount: 100,
    preferenceId: "<PREFERENCE_ID>",
  };

  const customization = {
    paymentMethods: {
      ticket: "all",
      bankTransfer: "all",
      creditCard: "all",
      debitCard: "all",
      mercadoPago: "all",
    },
  };

  return (
    <div>
      <h2>Página de Pagamento</h2>
      <Payment
        initialization={initialization}
        customization={customization}
        onSubmit={onSubmit}
        onError={onError}
        onReady={onReady}
      />
    </div>
  );
};

export default PaginaPagamento;
