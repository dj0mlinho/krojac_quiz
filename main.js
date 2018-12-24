window.addEventListener('load', run)
const myH1 = document.querySelector('h1')
let options = document.querySelectorAll('.option');

function run() {
  if (!quiz.end()) {
    let cq = quiz.getQuestion()
    myH1.innerHTML = cq.text;
    let rand = quiz.randomize()
    for (let i = 0; i < options.length; i++) {
      options[i].innerHTML = rand[i];
      options[i].onclick = function () {
        quiz.userAnswer(this.innerHTML);
        run()
      }
    }
  } else {
    alert(`Vaš rezultat je ${quiz.score} poena od mogućih 25`)
  }


}