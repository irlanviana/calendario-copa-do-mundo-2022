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
    "22/11",
    "terça",
    createGame("argentina", "07:00", "saudi arabia") +
      createGame("mexico", "13:00", "poland")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("poland", "10:00", "saudi arabia") +
      createGame("argentina", "16:00", "mexico")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("poland", "16:00", "argentina") +
      createGame("saudi arabia", "16:00", "mexico")
  )
