function createGame(player1, hour, player2) {
  return `
  <li>
              <img src="./../assets/icon=${player1}.svg" alt="Bandeira do ${player1}" />
              <strong>${hour}</strong>
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
    createGame("germany", "10:00", "japan") +
      createGame("spain", "13:00", "costa rica")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japan", "07:00", "costa rica") +
      createGame("spain", "16:00", "germany")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("japan", "16:00", "spain") +
      createGame("costa rica", "16:00", "germany")
  )
