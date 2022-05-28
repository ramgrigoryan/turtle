// function triangleLabyrinth() {
//   let delta = 0;
//   for (let j = 0; j < 150; j += 1) {
//     right(3);
//     for (let i = 0; i < 3; i++) {
//       i == 1
//         ? colour(152, 251, 152, 1)
//         : i == 2
//         ? colour(220, 20, 60, 1)
//         : colour(186, 85, 211, 1);
//       if ((i !==0)) {
//         delta = +1;
//       } else {
//         delta = 0;
//       }
//       forward(100 + delta);
//       left(120);
//     }
//   }
// }
// triangleLabyrinth();

//Task 34

// const randomNumber = (from, to) => (to - from) * Math.random();

// function drawColoredLine() {
//   for (let i = 0; i < 20; i++) {
//     colour(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255), 1);
//     forward(randomNumber(10, 60));
//   }
// }

// function drawSunlight() {
//   goto(-320, 320);
//   angle(90)
//   for (let i = 0; i < 50; i++) {
//     right(randomNumber(0,90));
//     drawColoredLine();
//     goto(-320, 320);
//     angle(90);
//   }
// }
// drawSunlight();

// goto(-300,0);
// gradient("r");
// goto(-200,0);
// gradient("g");
// goto(-100,0);
// gradient("b");
// goto(0,0);
// gradient("z");
// goto(100,0);
// gradient("k");
// goto(200,0);
// gradient("m");
// goto(300,0);
// gradient("n");

// const color = (tone, colour) => {
//   if(tone=="r"){

//   }
//     return colour(...tone);
// };


// Task35 

function drawGradientLine(getColor) {
  for (let i = 0; i < 20; i++) {
    colour(...getColor(i), 1);
    forward(10);
  }
}

function gradient(comp) {
  switch (comp) {
    case "r":
      drawGradientLine((i) => [i * 12, 0, 0]);
      break;
    case "g":
      drawGradientLine((i) => [0, i * 12, 0]);
      break;
    case "b":
      drawGradientLine((i) => [0, 0, i * 12]);
      break;
    default:
      drawGradientLine((i) => [i * 12, i * 12, i * 12]);
  }
}
goto(-300, 0);
gradient("r");
goto(-200, 0);
gradient("g");
goto(-100, 0);
gradient("b");
goto(0, 0);
gradient("z");
goto(100, 0);
gradient("k");
goto(200, 0);
gradient("m");
goto(300, 0);
gradient("n");
