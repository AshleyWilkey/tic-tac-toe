const board = document.getElementById("board");
const rows = 3;
const cols = 3;

buildBoard();

function buildBoard() {
  for (let i = 0; i < rows; i++) {
    const row = createElementAndAppendTo(i, "row", board);
    for (let j = 0; j < cols; j++) {
      const col = createElementAndAppendTo(j, "col", row);
      col.addEventListener("click", markSpot);
    }
  }
}

function createElementAndAppendTo(idx, kind, appendTo) {
  const el = document.createElement("div");
  el.id = `${kind}-${idx}`;
  el.className = kind;
  appendTo.appendChild(el);
  return el;
}

function markSpot(e) {
  e.target.innerHTML = `<h1>X</h1>`;
}
