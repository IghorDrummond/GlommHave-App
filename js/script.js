/*===============Declaração de Variaveis==================*/
//String
var raca = ""//Recebe a Raça do Personagem
//Numero
var posic = 0 //Posiciona no vetor se caso ele retornar a raça encontrada
var escolha = 0
//Array
var tiporaca = ['brutos', 'engenhoqueiro', 'tecelã', 'malandra', 'coração de pedra', 'ladra de mentes']//Define as Raças Existentes
var imagem = ['imagem/tecela-fundo.PNG', 'imagem/Engenhoqueiro-fundo.jpg', 'imagem/malandra-fundo.jpg', 'imagem/brutos-fundo.jpg', 'imagem/ladra-fundo.jpg', 'imagem/pedra-fundo.jpg']

//==============================Escopo de Eventos=================
//Sorteia o Fundo do Aplicativo
document.addEventListener("DOMContentLoaded", function() {
	//Sorteia um numero entre 0 até 5
	escolha =  Math.floor(Math.random() * ((imagem.length -1) - 0 + 1)) + 0
	//Define a Imagem de fundo de acordo com o numero sorteado
	document.querySelector("body").style.backgroundImage = "url(" + imagem[escolha] + ")"
});

//==============================Escopo de Funções=================
/*
-------------------------------------------------------------------
Função: Confirma()
------------------------------------------------------------------|
Motivo: Confirma a Raça do Usuario e Estabelece um estilo próprio
------------------------------------------------------------------|
Data: 01/10/2023
------------------------------------------------------------------|
Programador(a): Ighor Drummond
-------------------------------------------------------------------
*/
function Confirma(){
	raca = document.querySelector('#cabecalho select').value;
	
	if(raca != 'Selecione...' && raca != ''){

		//Aqui valida se a raça ja está selecionada
		if(raca.toUpperCase() == tiporaca[posic].toUpperCase() && posic > -1){
			Aviso('Raça Já Selecionada')
			document.querySelector("#cabecalho select").style.borderColor = 'red'
		}
		else{
			posic = RetornaPosic(tiporaca)//Retorna a Posição caso houver o Elemento no Vetor

			if (posic > -1){
				EstiloRaca(posic)//Função enfeitará o fundo do aplicativo
			}
			else{
				Aviso('Raça Inexistente')
				document.querySelector("#cabecalho select").style.borderColor = 'red'
			}
		}
	}
	else{
		Aviso('Selecione uma Raça!')
		document.querySelector("#cabecalho select").style.animation = 'surgi 4s'
	}
}
/*
-------------------------------------------------------------------
Função: RetornaPosic()
------------------------------------------------------------------|
Motivo: Retorna a posição do elementro encontrado no vetor
------------------------------------------------------------------|
Data: 01/10/2023
------------------------------------------------------------------|
Programador(a): Ighor Drummond
-------------------------------------------------------------------
*/
function RetornaPosic(tiporaca){
//=============================Declaração de Variaveis
	//Numerico
	var Ret = -1;//Retornar Posição
	var Cont = 0//Contador 

	for ( Cont = 0; Cont <= tiporaca.length-1; Cont++) {
		if(tiporaca[Cont].toUpperCase() == raca.toUpperCase()){
			Ret = Cont
			break
		}		
	}

	return Ret//Retorna a Posição caso encontrada
}
/*
-------------------------------------------------------------------
Função: EstiloRaca()
------------------------------------------------------------------|
Motivo: Deixa o Site no Estilo da cor da raça + o tituloe vantagens
------------------------------------------------------------------|
Data: 01/10/2023
------------------------------------------------------------------|
Programador(a): Ighor Drummond
-------------------------------------------------------------------
*/
function EstiloRaca(posic){
//=============================Declaração de Variaveis
	//String
	var cor = ""//Define a Cor das Letras
	var corfundo = ""//Define a Cor de fundo
	var titulo = ""//Nome da Espécie
	var imagem = ""//Define o Logo da Especie

	//Desligando Select	

	switch (posic) {
		case 0:
			corfundo = 'blue'
			titulo = "Bruto Inox"	
			imagem =  "url('imagem/brutos-logo.png')"
			cor = "#00ced1"	
			PopUp(3, titulo, corfundo, cor, imagem)	
			break;
		case 1:
			corfundo = '#6c3c0c'
			titulo = "Engenhoqueiro"		
			imagem =  "url('imagem/Engenhoqueiro.png')"
			cor = "#b7410e"
			PopUp(1, titulo, corfundo, cor, imagem)					
			break;
		case 2:
			corfundo = '#8a2be2'
			titulo = "Tecelã Arcana"			
			imagem = "url('imagem/tecela.png')"
			cor = "pink"	
			PopUp(0, titulo, corfundo, cor, imagem)	
			break;		
		case 3: 	
			corfundo = 'green'
			titulo = "Malandra"			
			imagem = "url('imagem/malandra.png')"
			cor = "#66cc66"	
			PopUp(2, titulo, corfundo, cor, imagem)	
			break;					 
		case 4:
			corfundo = 'yellowgreen'
			titulo = "Coração de Pedra"			
			imagem = "url('imagem/pedra.png')"
			cor = "#00cc39"	
			PopUp(5, titulo, corfundo, cor, imagem)	
			break;					 
		case 5:
			corfundo = '#00aec3'
			titulo = "Ladra de Mentes"			
			imagem = "url('imagem/ladra.png')"
			cor = "blue"	
			PopUp(4, titulo, corfundo, cor, imagem)	
			break;					 
	}
	  
	document.querySelector("#cabecalho select").style.display = "none"		
	document.querySelector("#cabecalho h4").style.fontSize = '2em'	
	document.querySelector("#cabecalho").style.height = "60px"
	document.querySelector("#cabecalho button").style.display ="none"	
	document.querySelector('#home').style.background = corfundo
	document.querySelector("#home").style.border = '6px dotted' + cor
	document.querySelector("#cabecalho").style.borderBottom = '6px dotted' + cor
	document.querySelector("#cabecalho").style.height = "60px"
	document.querySelector("#cabecalho button").style.display ="none"
	document.querySelector('#cabecalho h4').style.color = cor
	document.querySelector("#cabecalho h4").innerHTML = titulo
	document.querySelector("#cabecalho h4").style.fontSize = '2em'
	document.querySelector("#cabecalho h4").style.backgroundImage = imagem
	document.querySelector("#formulario").style.color = cor
	document.querySelector("#vantagens").style.color = cor
	document.querySelector("#anotacoes").style.color = cor
	document.querySelector("#rodape>button").style.color = corfundo
	document.querySelector("#rodape>button").style.background= cor
}	
/*
-------------------------------------------------------------------
Função: Voltar()
------------------------------------------------------------------|
Motivo: Reative o Select para escolher outra Raça Preservando os Dados
------------------------------------------------------------------|
Data: 01/10/2023
------------------------------------------------------------------|
Programador(a): Ighor Drummond
-------------------------------------------------------------------
*/
function voltar(){
	//Reativa o Select
	document.querySelector("#cabecalho select").style.display = "block"	
	//Reative o Botão de Confirmar
	document.querySelector("#cabecalho button").style.display ="inline"
	//Aumenta a Div do Cabeçalho
	document.querySelector("#cabecalho").style.height = "200px"
}
/*
-------------------------------------------------------------------
Função: Voltar()
------------------------------------------------------------------|
Motivo: Após usuario confirmar o Ok do botão, desligar a tela de erro
------------------------------------------------------------------|
Data: 01/10/2023
------------------------------------------------------------------|
Programador(a): Ighor Drummond
-------------------------------------------------------------------
*/
function Ok(){
	document.querySelector("#container-aviso").style.display = 'none'
}
/*
-------------------------------------------------------------------
Função: Aviso()
------------------------------------------------------------------|
Motivo: Mensagem de Aviso
------------------------------------------------------------------|
Data: 01/10/2023
------------------------------------------------------------------|
Programador(a): Ighor Drummond
-------------------------------------------------------------------
*/
function Aviso(titulo){
	document.querySelector("#container-aviso").style.display = "block"
	document.querySelector("#container-aviso audio").play()
	document.querySelector("#aviso h5").innerHTML = titulo
}
/*
-------------------------------------------------------------------
Função: PopUp
------------------------------------------------------------------|
Motivo: Mensagem de Raça Escolhida
------------------------------------------------------------------|
Data: 01/10/2023
------------------------------------------------------------------|
Programador(a): Ighor Drummond
-------------------------------------------------------------------
*/
function PopUp(Num, titulo, fundo, cor, fundoImg){
	//
	document.querySelector("#raca audio").play()
	document.querySelector('#raca').style.display = 'block'
	document.querySelector('#raca-imagem').style.backgroundImage = 'url('+ imagem[Num] + ')'
	document.querySelector("#raca-titulo h4").style.color = fundo
	document.querySelector("#raca-titulo h4").style.backgroundImage = fundoImg
	document.querySelector("#raca-titulo h4").innerHTML = titulo
	document.querySelector("#raca-titulo").style.borderBottom = '2px solid ' + cor
	document.querySelector("#raca").style.boxShadow = '0 0 500px ' + cor
	document.querySelector("#raca").style.borderColor = cor
}
/*
-------------------------------------------------------------------
Função: PopUp
------------------------------------------------------------------|
Motivo: Cancelar Tela de Raça Escolhida
------------------------------------------------------------------|
Data: 01/10/2023
------------------------------------------------------------------|
Programador(a): Ighor Drummond
-------------------------------------------------------------------
*/
function Continuar(){
	document.querySelector('#raca').style.display = 'none'
}