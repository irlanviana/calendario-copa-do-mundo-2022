function createGame(player1, result, player2) {
  return `
  <li>
              <img src="./../assets/icon=${player1}.svg" alt="Bandeira do ${player1}" />
              <strong>${result}</strong>
              <img src="./../assets/icon=${player2}.svg" alt="Bandeira da ${player2}" />
            </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
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
    "22/11",
    "terça",
    createGame("denmark", "0 x 0", "tunisia") +
      createGame("france", "4 x 1", "australia")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("tunisia", "0 x 1", "australia") +
      createGame("france", "2 x 1", "denmark")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("tunisia", "12:00", "france") +
      createGame("australia", "12:00", "denmark")
  )
