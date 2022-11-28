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
          "20/11",
          "domingo",
          createGame("qatar", "0 x 2", "ecuador")
        ) +

        createCard(
          "21/11",
          "segunda",
          createGame("senegal", "0 x 2", "netherlands")
        ) +

        createCard(
          "25/11",
          "sexta",
          createGame("qatar", "1 x 3", "senegal") +
          createGame("netherlands", "1 x 1", "ecuador")
        ) +

        createCard(
          "29/11",
          "terça",
          createGame("ecuador", "12:00", "senegal") +
          createGame("netherlands", "12:00", "qatar")
        )

