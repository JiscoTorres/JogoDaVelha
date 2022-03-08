//Elementos DOM
const casas = document.getElementsByTagName('input')// pega todos os inputs do HTML e define na variável casas
const b_reiniciar = document.getElementById('reiniciar') //pega o botão de reiniciar(elemento=button) por meio do ID dado no html 
const label_jogador = document.getElementById('jogador') //pegar o label do jogador(elemento=span) que usaremos para mostrar qual jogador tem a vez
//label_jogador é o X ou a O
const res = document.getElementById('res') //pega o resultado do jogo(empate ou ganho de X ou O), está invisível inicialmente pelo css

//Definindo variáveis de estado do jogo
var jogador = '_' //Define o jogador atual (_ = jogador indefinido; X = jogador X, O = jogador O) 
var vencedor = '_' //Define se há um vencedor ou não (_ = indefinido; X = jogador X, O = jogador O) 
var numero_de_jogadas = 0 //serve para descobrirmos se houve ou não empate (número de jogadas=9, tem empate)
var existe_vencedor = false//serve para verificar se houve ou não vencedor, impedindo que haja mais de um ganhador em uma partida


SelecionarJogador()//Define qual jogador começa o jogo ao rodar o programa


function SelecionarJogador() { //Além de escolher quem inicia o jogo( no caso é a "O"), possibilita que troque a vez do jogador, mostrando no  canto inferior da tela


	if (jogador == '_') { // Ao rodar o programa pela primeira vez, a O começa o jogo
		jogador = "O" //define o jogador O como atual
		label_jogador.innerText = "O" //exibe na página qual é o jogador atual
		label_jogador.style.color = '#ffffff' //deixa o texto na cor branca
	} else if (jogador == 'O') {
		jogador = "X"//define o jogador X como atual
		label_jogador.innerText = "X" //exibe na página qual é o jogador atual
		label_jogador.style.color = '#ffffff'//deixa o texto na cor branca
	}

	else {
		jogador = "O" //define o jogador O como atual
		label_jogador.innerText = "O" //exibe na página qual é o jogador atual
		label_jogador.style.color = '#ffffff' //deixa o texto na cor branca
	}



}

//Element.addEventListener() registra quando um elemento sofre um evento, podendo colocar o tipo de evento e chamando uma função específica para cada um.
casas[0].addEventListener('click', casa_0)
casas[1].addEventListener('click', casa_1)
casas[2].addEventListener('click', casa_2)
casas[3].addEventListener('click', casa_3)
casas[4].addEventListener('click', casa_4)
casas[5].addEventListener('click', casa_5)
casas[6].addEventListener('click', casa_6)
casas[7].addEventListener('click', casa_7)
casas[8].addEventListener('click', casa_8)

function casa_0() { // Quando clicar em um input, será atribuído O ou X por essa function


	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[0].value == '_') && (vencedor != 'O') && (vencedor != 'X') && existe_vencedor == false) {
		casas[0].value = jogador //preenche a casa com X ou O
		casas[0].style.color = '#000000' //torna o valor da casa visível
		console.log(casas[0].value)
		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
		//se o vencedor existe, imprime
	}

	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		console.log('Empate')
		numero_de_jogadas = 0
	}


}

function casa_1() { // Quando clicar em um input, será atribuído O ou X por essa function


	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[1].value == '_') && (vencedor != 'O') && (vencedor != 'X') && existe_vencedor == false) {
		casas[1].value = jogador //preenche a casa com X ou O
		casas[1].style.color = '#000000' //torna o valor da casa visível
		console.log(casas[1].value)
		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
	}


	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		console.log('Empate')
		numero_de_jogadas = 0
	}


}

function casa_2() { // Quando clicar em um input, será atribuído O ou X por essa function


	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[2].value == '_') && (vencedor != 'O') && (vencedor != 'X') && existe_vencedor == false) {
		casas[2].value = jogador //preenche a casa com X ou O
		casas[2].style.color = '#000000' //torna o valor da casa visível
		console.log(casas[2].value)

		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
		//se o vencedor existe, imprime
	}


	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		console.log('Empate')
		numero_de_jogadas = 0
	}


}
function casa_3() { // Quando clicar em um input, será atribuído O ou X por essa function


	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[3].value == '_') && (vencedor != 'O') && (vencedor != 'X') && existe_vencedor == false) {
		casas[3].value = jogador //preenche a casa com X ou O
		casas[3].style.color = '#000000' //torna o valor da casa visível
		console.log(casas[3].value)

		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
		//se o vencedor existe, imprime
	}


	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		console.log('Empate')
		numero_de_jogadas = 0
	}


}

function casa_4() { // Quando clicar em um input, será atribuído O ou X por essa function


	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[4].value == '_') && (vencedor != 'O') && (vencedor != 'X') && existe_vencedor == false) {
		casas[4].value = jogador //preenche a casa com X ou O
		casas[4].style.color = '#000000' //torna o valor da casa visível
		console.log(casas[4].value)

		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
		//se o vencedor existe, imprime
	}


	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		console.log('Empate')
		numero_de_jogadas = 0
	}


}

function casa_5() { // Quando clicar em um input, será atribuído O ou X por essa function


	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[5].value == '_') && (vencedor != 'O') && (vencedor != 'X') && existe_vencedor == false) {
		casas[5].value = jogador //preenche a casa com X ou O
		casas[5].style.color = '#000000' //torna o valor da casa visível
		console.log(casas[5].value)

		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
		//se o vencedor existe, imprime
	}


	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		console.log('Empate')
		numero_de_jogadas = 0
	}


}

function casa_6() { // Quando clicar em um input, será atribuído O ou X por essa function


	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[6].value == '_') && (vencedor != 'O') && (vencedor != 'X') && existe_vencedor == false) {
		casas[6].value = jogador //preenche a casa com X ou O
		casas[6].style.color = '#000000' //torna o valor da casa visível
		console.log(casas[6].value)

		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
		//se o vencedor existe, imprime
	}


	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		console.log('Empate')
		numero_de_jogadas = 0
	}


}

function casa_7() { // Quando clicar em um input, será atribuído O ou X por essa function


	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[7].value == '_') && (vencedor != 'O') && (vencedor != 'X') && existe_vencedor == false) {
		casas[7].value = jogador //preenche a casa com X ou O
		casas[7].style.color = '#000000' //torna o valor da casa visível
		console.log(casas[7].value)

		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
		//se o vencedor existe, imprime
	}


	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		console.log('Empate')
		numero_de_jogadas = 0
	}


}

function casa_8() { // Quando clicar em um input, será atribuído O ou X por essa function


	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[8].value == '_') && (vencedor != 'O') && (vencedor != 'X') && existe_vencedor == false) {
		casas[8].value = jogador //preenche a casa com X ou O
		casas[8].style.color = '#000000' //torna o valor da casa visível
		console.log(casas[8].value)

		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
		//se o vencedor existe, imprime
	}


	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		console.log('Empate')
		numero_de_jogadas = 0
	}


}




//Define a resposta ao evento de clique no botão Reiniciar
b_reiniciar.addEventListener('click', reiniciar_partida)


function reiniciar_partida() {
	res.style.color = 'transparent'
	existe_vencedor = false
	numero_de_jogadas = 0

	for (var i = 0; i < 9; i++) {
		casas[i].value = '_' // Limpa todas as casas.
		casas[i].style.color = 'transparent' // Torna o valor "-" invisível, e com isso, esse símbolo retorna a coloração transparente. 
		casas[i].style.backgroundColor = '#ffffff' // O fundo retoma sua configuração branca. 
	}

	vencedor = '_' // Conclui o processo de resetar o vencedor.
}


// Verifica se uma condição de vitória foi atingida e COLORE A LINHA DA VITÓRIA. 
function verificador_vitoria() {
	if ((casas[0].value == casas[1].value) && (casas[1].value == casas[2].value) && casas[0].value != '_' && existe_vencedor == false) {
		casas[0].style.backgroundColor = '#b61c1c67'
		casas[1].style.backgroundColor = '#b61c1c67'
		casas[2].style.backgroundColor = '#b61c1c67'
		res.style.color = '#ffffff'
		res.innerHTML = `${casas[0].value} venceu`
		console.log(`${casas[0].value} venceu`)
		existe_vencedor = true
		numero_de_jogadas = 0
		return casas[0].value
// Apartir daqui todas as "Casas[...]" deverão apresentar um valor. Esse valor, portanto, deverá ser diferente (!=) de "_".
    
    } else if ((casas[0].value == casas[3].value) && (casas[3].value == casas[6].value) && casas[0].value != '_' && existe_vencedor == false) {
	casas[0].style.backgroundColor = '#b61c1c67'
	casas[3].style.backgroundColor = '#b61c1c67'
	casas[6].style.backgroundColor = '#b61c1c67'
	res.style.color = '#ffffff'
	res.innerHTML = `${casas[0].value} venceu`
	console.log(`${casas[0].value} venceu`)
	existe_vencedor = true
	numero_de_jogadas = 0
	return casas[0].value


	} else if ((casas[3].value == casas[4].value) && (casas[4].value == casas[5].value) && casas[3].value != '_' && existe_vencedor == false) {
		casas[3].style.backgroundColor = '#b61c1c67'
		casas[4].style.backgroundColor = '#b61c1c67'
		casas[5].style.backgroundColor = '#b61c1c67'
		res.style.color = '#ffffff'
		res.innerHTML = `${casas[3].value} venceu`
		console.log(`${casas[3].value} venceu`)
		existe_vencedor = true
		numero_de_jogadas = 0
		return casas[3].value

	} else if ((casas[6].value == casas[7].value) && (casas[7].value == casas[8].value) && casas[6].value != '_' && existe_vencedor == false) {
		casas[6].style.backgroundColor = '#b61c1c67'
		casas[7].style.backgroundColor = '#b61c1c67'
		casas[8].style.backgroundColor = '#b61c1c67'
		res.style.color = '#ffffff'
		res.innerHTML = `${casas[6].value} venceu`
		console.log(`${casas[6].value} venceu`)
		existe_vencedor = true
		numero_de_jogadas = 0
		return casas[6].value

	} else if ((casas[0].value == casas[3].value) && (casas[3].value == casas[6].value) && casas[0].value != '_' && existe_vencedor == false) {
		casas[0].style.backgroundColor = '#b61c1c67'
		casas[3].style.backgroundColor = '#b61c1c67'
		casas[6].style.backgroundColor = '#b61c1c67'
		res.style.color = '#ffffff'
		res.innerHTML = `${casas[0].value} venceu`
		console.log(`${casas[0].value} venceu`)
		existe_vencedor = true
		numero_de_jogadas = 0
		return casas[0].value

	} else if ((casas[1].value == casas[4].value) && (casas[4].value == casas[7].value) && casas[1].value != '_' && existe_vencedor == false) {
		casas[1].style.backgroundColor = '#b61c1c67'
		casas[4].style.backgroundColor = '#b61c1c67'
		casas[7].style.backgroundColor = '#b61c1c67'
		res.style.color = '#ffffff'
		res.innerHTML = `${casas[1].value} venceu`
		console.log(`${casas[1].value} venceu`)
		existe_vencedor = true
		numero_de_jogadas = 0
		return casas[1].value

	} else if ((casas[2].value == casas[5].value) && (casas[5].value == casas[8].value) && casas[2].value != '_' && existe_vencedor == false) {
		casas[2].style.backgroundColor = '#b61c1c67'
		casas[5].style.backgroundColor = '#b61c1c67'
		casas[8].style.backgroundColor = '#b61c1c67'
		res.style.color = '#ffffff'
		res.innerHTML = `${casas[2].value} venceu`
		console.log(`${casas[2].value} venceu`)
		existe_vencedor = true
		numero_de_jogadas = 0
        return casas[2].value

	} else if ((casas[0].value == casas[4].value) && (casas[4].value == casas[8].value) && casas[0].value != '_' && existe_vencedor == false) {
		casas[0].style.backgroundColor = '#b61c1c67'
		casas[4].style.backgroundColor = '#b61c1c67'
		casas[8].style.backgroundColor = '#b61c1c67'
		res.style.color = '#ffffff'
		res.innerHTML = `${casas[0].value} venceu`
		console.log(`${casas[0].value} venceu`)
		existe_vencedor = true
		numero_de_jogadas = 0
		return casas[0].value

	} else if ((casas[2].value == casas[4].value) && (casas[4].value == casas[6].value) && casas[2].value != '_' && existe_vencedor == false) {
		casas[2].style.backgroundColor = '#b61c1c67'
		casas[4].style.backgroundColor = '#b61c1c67'
		casas[6].style.backgroundColor = '#b61c1c67'
		res.style.color = '#ffffff'
		res.innerHTML = `${casas[2].value} venceu`
		console.log(`${casas[2].value} venceu`)
		existe_vencedor = true
		numero_de_jogadas = 0
		return casas[2].value
	} // Faz isso através da cor dos quadrados e suas combinações.

	else { // Acontece caso não tenha um vencedor. 
		numero_de_jogadas++
		return '_'
	}




}