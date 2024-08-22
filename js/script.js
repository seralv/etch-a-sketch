const container = document.querySelector(".grid-container");
const boardChoice = document.querySelector("#boardChoice");
const btn = document.querySelector("#btn");

function handleClick() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  if (boardChoice.value < 101 && boardChoice.value > 0) {
    const boxes = boardChoice.value ** 2;
    const sizeDiv = Math.floor(100 / boardChoice.value);
    for (let i = 1; i <= boxes; i++) {
      const div = document.createElement("div");
      div.style.margin = "1px";
      div.style.height = `${sizeDiv}vh`;
      div.style.width = `${sizeDiv}vw`;
      div.style.background = "LightBlue";
      div.style.textAlign = "center";
      div.style.lineHeight = "100px";
      container.appendChild(div);
      div.addEventListener("mouseover", () => {
        div.style.background = "red";
        div.style.color = "white";
      });
    }
  } else {
    alert("Please enter a number between 1 to 100");
  }
}

btn.addEventListener("click", handleClick);
