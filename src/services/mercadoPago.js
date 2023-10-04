export const processPayment = async (formData) => {
    try {
      const response = await fetch('http://localhost:8080/process_payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJBUEkgRUNPTUVSQ0UiLCJzdWIiOiJ1YWRtIiwiaWQiOiI2NDhiZWExNGE1MTc2ZDQ1ZWVkZDU0MWUiLCJub21lRGVVc3VhcmlvIjoiYWRtICIsImVtYWlsIjoiZW1haWxAZW1haWwuY29tIiwidGlwbyI6dHJ1ZSwiZXhwIjoxNjg4NjMxNzI2fQ.Wu3eJEDK4nde5wheBi9Fo_24sBo-dFVtOaqEkrshsa4",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        // Lidar com a resposta do pagamento
      } else {
        throw new Error('Erro ao processar pagamento');
      }
    } catch (error) {
      throw error;
    }
  };
  