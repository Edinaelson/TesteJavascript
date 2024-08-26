// Tabela de preços
const tabelaPrecos = {
    '0-1,0-5': 10.0,   // Até 1 kg e até 5 km: R$ 10.00
    '0-1,6-10': 15.0,  // Até 1 kg e 6-10 km: R$ 15.00
    '1-5,0-5': 20.0,   // 1-5 kg e até 5 km: R$ 20.00
    '1-5,6-10': 25.0,  // 1-5 kg e 6-10 km: R$ 25.00
    '5-10,0-5': 30.0,  // 5-10 kg e até 5 km: R$ 30.00
    '5-10,6-10': 35.0  // 5-10 kg e 6-10 km: R$ 35.00
};

// Função para calcular o frete
function calcularFrete(peso, distancia, tabelaPrecos) {
    let chave = '';

    // Verifica a faixa de peso
    if (peso > 0 && peso <= 1) {
        chave += '0-1,';
    } else if (peso > 1 && peso <= 5) {
        chave += '1-5,';
    } else if (peso > 5 && peso <= 10) {
        chave += '5-10,';
    }

    // Verifica a faixa de distância
    if (distancia > 0 && distancia <= 5) {
        chave += '0-5';
    } else if (distancia > 5 && distancia <= 10) {
        chave += '6-10';
    }

    // Retorna o valor do frete com base na chave
    return tabelaPrecos[chave] || 'Faixa de peso ou distância fora do limite suportado';
}

// Exemplo de uso:
const peso = 3; // Peso do pedido em kg
const distancia = 8; // Distância para entrega em km

const valorFrete = calcularFrete(peso, distancia, tabelaPrecos);
console.log("Valor do frete: R$ " + valorFrete);
