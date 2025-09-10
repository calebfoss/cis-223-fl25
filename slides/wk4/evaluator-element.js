window.addEventListener("DOMContentLoaded", () => {
  const evaluators = document.querySelectorAll(".evaluator");
  for (const evaluator of evaluators) {
    const input =
      evaluator.querySelector("input") || document.createElement("input");

    const code =
      evaluator.querySelector("code") || document.createElement("code");
    code.style.display = "block";
    const output = new Text();
    code.appendChild(output);

    input.addEventListener("change", (e) => {
      output.nodeValue = eval(e.target.value);
    });
    evaluator.appendChild(input);
    evaluator.appendChild(code);
  }
});
