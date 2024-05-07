//Funcao para calculo das ferramentas selecionadas
const calcularTotal = (ferramentas, comprar) => {

    if (ferramentas.length === 0 || comprar.length === 0) {
        throw new Error("Ambas as listas precisam ter ao menos um item.");
    }

    //Variaveis para armazenar o total e a lista de ferramentas encontradas
    let total = 0;
    let ferramentasEncontradas = [];

    //Loop para percorrer a lista de ferramentas
    for (let i = 0; i < ferramentas.length; i++) {
        const ferramenta = ferramentas[i];
        //Comparação da ferramenta com a lista de compra
        if (comprar.includes(ferramenta.nome)) {
            total += ferramenta.preco;
            ferramentasEncontradas.push(ferramenta.nome);
        }
    }

    if (ferramentasEncontradas.length === 0) {
        throw new Error("Nenhuma ferramenta desejada encontrada.");
    }

    //Monta o retorno com a lista de ferramentas e o valor total com duas casas decimais
    return `O valor a pagar pelas ferramentas (${comprar.join(", ")}) é R$ ${total.toFixed(2)}`;
}


module.exports = {
    calcularTotal
}