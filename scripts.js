// Seleciona todos os elementos com a classe "item" (os sabores do refrigerante)
let list = document.querySelectorAll('.item')

// Seleciona os botões de navegação pelo ID
let next = document.getElementById('next') // Botão de avançar (próximo)
let prev = document.getElementById('prev') // Botão de voltar (anterior)

// Obtém a quantidade total de itens (sabores de refrigerante)
let count = list.length

// Define a posição inicial do item ativo (começa no primeiro item)
let active = 0

// Evento de clique no botão "next" (próximo sabor)
next.onclick = () => {
   let activeOld = document.querySelector('.active') // Seleciona o item atualmente ativo
   activeOld.classList.remove('active') // Remove a classe "active" do item atual

   // Atualiza o índice do item ativo:
   // Se o item atual for o último, volta para o primeiro (índice 0)
   // Caso contrário, avança para o próximo item
   active = active >= count - 1 ? 0 : active + 1 

   list[active].classList.add('active') // Adiciona a classe "active" ao novo item selecionado
}

// Evento de clique no botão "prev" (sabor anterior)
prev.onclick = () => {
    let activeOld = document.querySelector('.active') // Seleciona o item atualmente ativo
    activeOld.classList.remove('active') // Remove a classe "active" do item atual

   // Atualiza o índice do item ativo:
   // Se o item atual for o primeiro (índice 0), volta para o último item
   // Caso contrário, retorna para o item anterior
   active = active <= 0 ? count - 1 : active - 1 

   list[active].classList.add('active') // Adiciona a classe "active" ao novo item selecionado
}