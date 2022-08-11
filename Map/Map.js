let students = [
  { name: "Allison Reynolds", age: "16" },
  { name: "Brian Johnson", age: "16" },
  { name: "John Bender", age: "17" },
  { name: "Claire Standish", age: "16" },
  { name: "Andrew Clark", age: "16" }
]

let style = {
  border: "border: 1px dotted black;",
  letter_blue: "color: blue;"
}

const student_element = _ => {
  document.querySelector('.list-students').innerHTML = students.map(
    student => `<li style="${style.border}${style.letter_blue}">
                  ${student.name}
                </li>`
  ).join("")
};student_element()
