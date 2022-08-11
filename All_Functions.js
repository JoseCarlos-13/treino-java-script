let methods = [
  { path: "ForEach/ForEach.html", title: "ForEach" },
  { path: "For/For.html", title: "For" },
  { path: "Função/Função.html", title: "Função" },
  { path: "Map/Map.html", title: "Map" },
  { path: "Variáveis/Variáveis.html", title: "Variáveis" },
  { path: "Arrow_Function/Arrow_Function.html", title: "Arrow Function" }
]

let list_item_style = `
  border: 1px solid none; padding: 40px; background-color: lightgrey;
`

let link_style = `
  color: black; font-size: 20px; font-style: normal; text-decoration: none;
`
let changeColorForDarkGrey = "this.style.background = 'darkgrey'"
let changeColorForLightGrey = "this.style.background = 'lightgrey'"

const returnCards = () => {
  document.querySelector('.methods').innerHTML = methods.map(method => {
    return `<li style="${list_item_style}" onMouseOver="${changeColorForDarkGrey}" onMouseOut="${changeColorForLightGrey}">
              <a href="${method.path}" style="${link_style}">
                ${method.title}
              </a>
            </li>`
  }).join("")
};returnCards()
