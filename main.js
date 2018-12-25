/*
window.addEventListener("load", run);
const myH1 = document.querySelector("h1");
let options = document.querySelectorAll(".option");

function run() {
  if (!quiz.end()) {
    let cq = quiz.getQuestion();
    myH1.innerHTML = cq.text;
    let rand = quiz.randomize();
    for (let i = 0; i < options.length; i++) {
      options[i].innerHTML = rand[i];
      options[i].onclick = function() {
        quiz.userAnswer(this.innerHTML);
        run();
      };
    }
  } else {
    alert(`Vaš rezultat je ${quiz.score} poena od mogućih 25`);
  }
}
*/









let myH1 = document.querySelector('h1');
let options = document.querySelectorAll('.option')

window.addEventListener("load", run)

function run() {
  if (!quiz.end()) {
    let cq = quiz.getQuestion()
    myH1.innerHTML = cq.text;
    let rand = quiz.randomize()
    for (let i = 0; i < options.length; i++) {
      options[i].innerHTML = rand[i];
      options[i].onclick = function () {
        quiz.userAnswer(this.innerHTML)
        run()
      }
    }
  } else {
    let maxScore = 0;
    for (let i = 0; i < questions.length; i++) {
      maxScore += questions[i].points;
    }
    alert(`Uspešno ste odgovorili na ${quiz.score} od ${maxScore}!`)
  }
}