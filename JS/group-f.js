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
    createGame("morocco", "0 x 0", "croatia") +
      createGame("belgium", "1 x 0", "canada")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("belgium", "0 x 2", "morocco") +
      createGame("croatia", "4 x 1", "canada")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("croatia", "12:00", "belgium") +
      createGame("canada", "12:00", "morocco")
  )
