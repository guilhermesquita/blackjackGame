window.alert('Seja bem vindo ao jogo BlackJack!')

const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

if(confirm('Deseja jogar o BlackJack?')){
   const cartaUser1 = comprarCarta();
   const cartaUser2 = comprarCarta();
   const resUser = cartaUser1.valor + cartaUser2.valor

   const cartaComp1 = comprarCarta();
   const cartaComp2 = comprarCarta();
   const resComp = cartaComp1.valor + cartaComp2.valor

   console.log(`Usuário - cartas: ${cartaUser1.texto} ${cartaUser2.texto} - pontuação ${resUser}`)
   console.log(`Computador - cartas: ${cartaComp1.texto} ${cartaComp2.texto} - pontuação ${resComp}`)

   if(resComp > resUser){
      console.log('O Computador venceu!')
   } else if(resUser > resComp){
      console.log('O Usuário venceu!')
   }else{
      console.log('Empate!')
   }

}else{
   console.log('O jogo acabou')
}

//♥️ - Copas
//♣️ - Paus
//♦️ - Ouros
//♠️ - Espadas
