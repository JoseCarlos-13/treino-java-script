let arr = ["why", "so", "serious"]

const listBeforeEach = () => {
 let oldlist = document.getElementById('list-before-each').innerHTML = arr.map(
    element => `<li>${element}</li>`
  ).join("")

  return oldlist
};listBeforeEach()

const listAfterEach = () => {
  let newlist = document.getElementById('list-after-each')

  newlist.innerHTML = arr.map(
    element => `<li>${element}</li>`
  ).join("")

  newlist.innerHTML = arr.forEach(item => {
    item = "joker"
    let i = item
    return console.log(i)
  })
};listAfterEach()
