function solve() {
  let correctAnswers = ["25.10.2000", "Kawhi Leonard", "Мими","2"];
  let rightAnswered = 0;
  let index = 0;

  Array
    .from(document.querySelectorAll(".answer-text"))
    .map((x) => x.addEventListener("click", function nextSection(e) {

      if (correctAnswers.includes(e.target.textContent)) {
        rightAnswered++;
      }

      let currSection = document.querySelectorAll("section")[index];
      currSection.style.display = "none";

      if (document.querySelectorAll("section")[index + 1] !== undefined) {
        let nextSection = document.querySelectorAll("section")[index + 1];
        nextSection.style.display = "block";
        index++;
      } else {
        document.querySelector("#results").style.display = "block";
        if (rightAnswered !== 4) {
          document.querySelector("#results h1").textContent = `You have ${rightAnswered}/4 right answers`;
        } else {
          document.querySelector("#results h1").textContent = "You are recognized as top Ico fan!";
        }
      }
    }));
}
