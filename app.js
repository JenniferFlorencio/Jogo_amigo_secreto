const amigos = []; // Lista para armazenar os amigos
let amigosSorteados = []; // Lista para controlar quem já foi sorteado

// Adiciona um nome à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (!nome || amigos.includes(nome)) {
        alert("Nome inválido ou já adicionado.");
        return;
    }

    amigos.push(nome); // Adiciona o nome à lista
    input.value = ""; // Limpa o campo de entrada
    atualizarLista(); // Atualiza a lista visível de amigos
}

// Atualiza a lista na tela
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = amigos.map(nome => `<li>${nome}</li>`).join(""); // Exibe os nomes
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos 1 nome!");
        return;
    }

    if (amigosSorteados.length === amigos.length) {
        alert("Todos os amigos já foram sorteados!");
        return;
    }

    let amigoSorteado;
    
    do {
        // Sorteia um nome aleatório
        amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    } while (amigosSorteados.includes(amigoSorteado)); // Garante que o nome não se repita

    amigosSorteados.push(amigoSorteado); // Marca o nome como sorteado

    // Exibe o nome sorteado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado} foi sorteado!</li>`;
}
