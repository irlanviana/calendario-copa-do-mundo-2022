function createSelection(flags, selection){
  return `
<li>
              <img src="./assets/icon=${flags}.svg" alt="Bandeira do ${selection}"/>
              <strong>${selection}</strong>
            </li>
  `
}


let delayGroup = -0.4;
function createGroup(groupAnchor, group, selections){
  delayGroup = delayGroup + 0.4;
  return `
  <div class="group">
          <h2>
            <a href="./groups/group-${groupAnchor}.html">${group}</a>
          </h2>

          <ul>
          ${selections}
          </ul>
        </div>
  `
}

document.querySelector("#groups").innerHTML =

createGroup(
"a",
"Grupo A",
  createSelection("qatar", "Catar") +
  createSelection("ecuador", "Equador" ) +
  createSelection("senegal", "Senegal") +
  createSelection("netherlands", "Holanda")
) +
createGroup(
  "b",
  "Grupo B",
  createSelection("england", "Inglaterra") +
  createSelection("iran", "Irã" ) +
  createSelection("united states", "Estados Unidos") +
  createSelection("wales", "Gales")
) +
createGroup(
  "c",
  "Grupo C",
  createSelection("argentina", "Argentina") +
  createSelection("saudi arabia", "Arábia Saudita") +
  createSelection("mexico", "México") +
  createSelection("poland", "Polônia")
) +
createGroup(
  "d",
  "Grupo D",
  createSelection("france", "França") +
  createSelection("australia", "Austrália") +
  createSelection("denmark", "Dinamarca") +
  createSelection("tunisia", "Tunísia")
) +
createGroup(
  "e",
  "Grupo E",
  createSelection("spain", "Espanha") +
  createSelection("costa rica", "Costa Rica") +
  createSelection("germany", "Alemanha") +
  createSelection("japan", "Japão")
) +
createGroup(
  "f",
  "Grupo F",
  createSelection("belgium", "Bélgica") +
  createSelection("canada", "Canadá") +
  createSelection("morocco", "Marrocos") +
  createSelection("croatia", "Croácia")
) +
createGroup(
  "g",
  "Grupo G",
  createSelection("brazil", "Brazil") +
  createSelection("serbia", "Sérvia") +
  createSelection("switzerland", "Suíça") +
  createSelection("cameroon", "Camarões")
) +
createGroup(
  "h",
  "Grupo H",
  createSelection("portugal", "Portugal") +
  createSelection("ghana", "Gana") +
  createSelection("uruguay", "Uruguai") +
  createSelection("south korea", "Coreia do Sul")
)


