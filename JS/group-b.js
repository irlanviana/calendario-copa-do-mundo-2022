function createGame(player1, result, player2) {
  return `
  <li>
              <img src="./../assets/icon=${player1}.svg" alt="Bandeira do ${player1}" />
              <strong>${result}</strong>
              <img src="./../assets/icon=${player2}.svg" alt="Bandeira da ${player2}" />
            </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
  <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>

          <ul>
            ${games}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
    
      createCard(
          "21/11",
          "segunda",
          createGame("england", "6 x 2", "iran") +
          createGame("united states", "1 x 1", "wales")
        ) +

        createCard(
          "25/11",
          "sexta",
          createGame("wales", "0 x 2", "iran") +
          createGame("england", "0 x 0", "united states")
        ) +

        createCard(
          "29/11",
          "terça",
          createGame("iran", "16:00", "united states") +
          createGame("wales", "16:00", "england")
        )
