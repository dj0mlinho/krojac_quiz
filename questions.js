class Question {
  constructor(text, options, answer, points, category) {
    this.text = text;
    this.options = options;
    this.answer = answer;
    this.points = points;
    this.category = category;

  }
}

const questions = [
  new Question("Glavni grad Srbije je?", ["Zagreb", "Sarajevo", "Niš", "Beograd"], "Beograd", 5, "Geografija"),
  new Question("Glavni grad Srbije2 je?", ["Zagreb", "Sarajevo", "Niš", "Beograd2"], "Beograd2", 5, "Geografija"),
  new Question("Glavni grad Srbije3 je?", ["Zagreb", "Sarajevo", "Niš", "Beograd3"], "Beograd3", 5, "Geografija"),
  new Question("Glavni grad Srbije4 je?", ["Zagreb", "Sarajevo", "Niš", "Beograd4"], "Beograd4", 5, "Geografija"),
  new Question("Glavni grad Srbije5 je?", ["Zagreb", "Sarajevo", "Niš", "Beograd5"], "Beograd5", 5, "Geografija"),
]