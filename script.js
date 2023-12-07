/* Desenvolva seu código abaixo */
function playRockPaperScissor(player1, player2) {
    const match = player1 + player2
    if ((match === "PedraTesoura")||(match === "TesouraPapel")||(match === "PapelPedra")){
        return "Jogador 1 venceu!"
    } else if ((match === "PedraPedra")||(match === "TesouraTesoura")||(match === "PapelPapel")){
        return "Empate!"
    } else if ((match === "PedraPapel")||(match === "TesouraPedra")||(match === "PapelTesoura")){
        return "Jogador 2 venceu!"
    }
}
