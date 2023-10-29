let Player1Array = [];
let Player2Array = [];
let clickCount = 0;
let Win = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
const btn = document.querySelectorAll("button");
const Winning = (PlayerArray, WinArray, event, PlayerNum, sign) => {
  PlayerArray.push(Number(event.target.innerHTML));
  event.target.innerHTML = sign;
  if (PlayerArray.length >= 3) {
    WinArray.forEach((elem) => {
      if (elem.every((elem) => PlayerArray.includes(elem))) {
        alert(`Player ${PlayerNum} win`);
      }
    });
  }
};
btn.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    clickCount += 1;
    if (clickCount % 2 === 0) {
      Winning(Player2Array, Win, e, 2, "X");
    } else {
      Winning(Player1Array, Win, e, 1, "O");
    }
    elem.setAttribute("disabled", true);
  });
});
