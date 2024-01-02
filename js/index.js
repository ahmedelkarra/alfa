let getLength = document.querySelectorAll(".square").length;
let mark = "X";
let squars = ["", "", "", "", "", "", "", "", ""];

for (let i = 0; i < getLength; i++) {
  document
    .querySelectorAll(".square")
    [i].addEventListener("click", function (e) {
      if (e.target.innerHTML.length == 0) {
        if (mark == "X") {
          mark = "O";
          squars[i] = mark;
          document.querySelector("h3").innerHTML = `Turn X`;
          e.target.innerHTML = mark;
        } else if (mark == "O") {
          mark = "X";
          squars[i] = mark;
          document.querySelector("h3").innerHTML = `Turn O`;
          e.target.innerHTML = mark;
        }
        if (
          squars[0] === squars[1] &&
          squars[1] === squars[2] &&
          squars[2] != ""
        ) {
          document.querySelectorAll(".square")[0].style.backgroundColor =
            "green";
          document.querySelectorAll(".square")[1].style.backgroundColor =
            "green";
          document.querySelectorAll(".square")[2].style.backgroundColor =
            "green";
          document.querySelector("h3").innerHTML = `The Winner Is ${squars[2]}`;
        } else if (
          squars[3] === squars[4] &&
          squars[4] === squars[5] &&
          squars[5] != ""
        ) {
          document.querySelectorAll(".square")[3].style.backgroundColor =
            "green";
          document.querySelectorAll(".square")[4].style.backgroundColor =
            "green";
          document.querySelectorAll(".square")[5].style.backgroundColor =
            "green";
          document.querySelector("h3").innerHTML = `The Winner Is ${squars[5]}`;
        } else if (
          squars[6] === squars[7] &&
          squars[7] === squars[8] &&
          squars[8] != ""
        ) {
          document.querySelectorAll(".square")[6].style.backgroundColor =
            "green";
          document.querySelectorAll(".square")[7].style.backgroundColor =
            "green";
          document.querySelectorAll(".square")[8].style.backgroundColor =
            "green";
          document.querySelector("h3").innerHTML = `The Winner Is ${squars[8]}`;
        } else if (
          squars[0] === squars[3] &&
          squars[3] === squars[6] &&
          squars[6] != ""
        ) {
          document.querySelectorAll(".square")[0].style.backgroundColor =
            "green";
          document.querySelectorAll(".square")[3].style.backgroundColor =
            "green";
          document.querySelectorAll(".square")[6].style.backgroundColor =
            "green";
          document.querySelector("h3").innerHTML = `The Winner Is ${squars[6]}`;
        } else if (
          squars[1] === squars[4] &&
          squars[4] === squars[7] &&
          squars[7] != ""
        ) {
          document.querySelectorAll(".square")[1].style.backgroundColor =
            "green";
          document.querySelectorAll(".square")[4].style.backgroundColor =
            "green";
          document.querySelectorAll(".square")[7].style.backgroundColor =
            "green";
          document.querySelector("h3").innerHTML = `The Winner Is ${squars[7]}`;
        } else if (
          squars[2] === squars[5] &&
          squars[5] === squars[8] &&
          squars[8] != ""
        ) {
          document.querySelectorAll(".square")[2].style.backgroundColor =
            "green";
          document.querySelectorAll(".square")[5].style.backgroundColor =
            "green";
          document.querySelectorAll(".square")[8].style.backgroundColor =
            "green";
          document.querySelector("h3").innerHTML = `The Winner Is ${squars[8]}`;
        } else if (
          squars[0] === squars[4] &&
          squars[4] === squars[8] &&
          squars[8] != ""
        ) {
          document.querySelectorAll(".square")[0].style.backgroundColor =
            "green";
          document.querySelectorAll(".square")[4].style.backgroundColor =
            "green";
          document.querySelectorAll(".square")[8].style.backgroundColor =
            "green";
          document.querySelector("h3").innerHTML = `The Winner Is ${squars[8]}`;
        } else if (
          squars[2] === squars[4] &&
          squars[4] === squars[6] &&
          squars[6] != ""
        ) {
          document.querySelectorAll(".square")[2].style.backgroundColor =
            "green";
          document.querySelectorAll(".square")[4].style.backgroundColor =
            "green";
          document.querySelectorAll(".square")[6].style.backgroundColor =
            "green";
          document.querySelector("h3").innerHTML = `The Winner Is ${squars[6]}`;
        }
      }
    });
}

class info {
  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.color = 'red'
  }
}

new info("Ahmed", 27, 1);
new info("Amr", 30, 2);
new info("Ahmed", 35, 3);

console.log(new info("Ahmed", 27, 1));
