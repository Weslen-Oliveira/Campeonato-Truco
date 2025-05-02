function selectPayment(element) {
    // Remove a classe 'selected' de todas as opções
    document.querySelectorAll('.payment-option').forEach(el => {
      el.classList.remove('selected');
    });
    
    // Adiciona a classe 'selected' ao elemento clicado
    element.classList.add('selected');
    
    // Atualiza o valor do campo hidden
    document.getElementById('formaPagamento').value = element.getAttribute('data-payment');
  }
  
  function validateForm() {
    // Verificação da forma de pagamento
    const formaPagamento = document.getElementById('formaPagamento').value;
    if (!formaPagamento) {
      alert("Por favor, selecione uma forma de pagamento.");
      return false;
    }
    
    // Verificação de datas
    const dataInicio = new Date(document.getElementById('dataInicio').value);
    const dataTermino = new Date(document.getElementById('dataTermino').value);
    
    if (dataTermino < dataInicio) {
      alert("A data de término deve ser posterior à data de início.");
      return false;
    }
    
    // Aqui você pode adicionar mais validações se necessário
    
    // Se tudo estiver ok, poderia enviar os dados para o Excel
    alert("Cadastro realizado com sucesso!");
    return true;
  }
  
  // Definir data mínima como hoje para os campos de data
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('dataInicio').setAttribute('min', today);
  document.getElementById('dataTermino').setAttribute('min', today);