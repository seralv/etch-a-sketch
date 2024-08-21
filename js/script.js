const container = document.querySelector(".grid-container");
const boardChoice = document.querySelector("#boardChoice");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  console.log(boardChoice.value);
});

for (let i = 1; i <= 16; i++) {
  const div = document.createElement("div");
  // div.textContent = `${i}`;
  div.style.margin = "1px";
  div.style.height = "100px";
  div.style.width = "100px";
  div.style.background = "LightBlue";
  div.style.textAlign = "center";
  div.style.lineHeight = "100px";
  container.appendChild(div);
  div.addEventListener("mouseover", () => {
    div.style.background = "red";
    div.style.color = "white";
  });
}
