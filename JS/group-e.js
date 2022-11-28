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
    "23/11",
    "quarta",
    createGame("germany", "1 x 2", "japan") +
      createGame("spain", "7 x 0", "costa rica")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japan", "0 x 1", "costa rica") +
      createGame("spain", "1 x 1", "germany")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("japan", "16:00", "spain") +
      createGame("costa rica", "16:00", "germany")
  )
