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

// Task35

// function drawGradientLine(getColor) {
//   for (let i = 0; i < 20; i++) {
//     colour(...getColor(i), 1);
//     forward(10);
//   }
// }

// function gradient(comp) {
//   switch (comp) {
//     case "r":
//       drawGradientLine((i) => [i * 12, 0, 0]);
//       break;
//     case "g":
//       drawGradientLine((i) => [0, i * 12, 0]);
//       break;
//     case "b":
//       drawGradientLine((i) => [0, 0, i * 12]);
//       break;
//     default:
//       drawGradientLine((i) => [i * 12, i * 12, i * 12]);
//   }
// }
// goto(-300, 0);
// gradient("r");
// goto(-200, 0);
// gradient("g");
// goto(-100, 0);
// gradient("b");
// goto(0, 0);
// gradient("z");
// goto(100, 0);
// gradient("k");
// goto(200, 0);
// gradient("m");
// goto(300, 0);
// gradient("n");

//Task 32
// function triangleShuriken() {
//   let length = 50;
//   let delta = 5;
//   left(180);
//   for (let i = 0; i < 200; i++) {
//     i % 3 == 2
//       ? colour(60, 179, 113, 1)
//       : i % 3 == 1
//       ? colour(218, 112, 214, 1)
//       : colour(220, 20, 60, 1);
//     if (i % 2 == 0) {
//       left(1 + Math.PI / 360);
//       length += delta;
//       forward(length);
//     } else {
//       forward(length);
//     }
//     left(120);
//   }
// }
// triangleShuriken();

//Task 33

const randomNumber = (from, to) => Math.round((to - from) * Math.random());

// function drawColoredLine(length) {
//   for (let i = 0; i < 10; i++) {
//     colour(0, randomNumber(0, 255), randomNumber(0, 255), 1);
//     forward(length/10);
//   }
// }
function drawColoredLine(length) {
  for (let i = 0; i < 10; i++) {
    switch (randomNumber(1, 4)) {
      case 1:
        colour(173, 216, 230, 1);
        break;
      case 2:
        colour(216, 191, 216, 1);
        break;
      case 3:
        colour(220, 220, 220, 1);
        break;
      default:
        colour(70, 130, 180, 1);
    }
    forward(length / 10);
  }
}

// const randomIntNumber = (from, to) => Math.round((to - from) * Math.random());

// function drawColoredLine(length) {
//   for (let i = 0; i < 10; i++) {
//     switch (randomIntNumber(1, 4)) {
//       case 1:
//         colour(173, 216, 230);
//         break;
//       case 2:
//         colour(216, 191, 216);
//         break;
//       case 3:
//         colour(220, 220, 220);
//         break;
//       default:
//         colour(70, 130, 180);
//     }
//     forward(length / 10);
//   }
// }

function triangleChameleonShuriken() {
  let length = 50;
  let delta = 5;
  left(45);
  for (let i = 0; i < 200; i++) {
    if (i % 2 == 0) {
      left(1.5 + Math.PI / 90);
      length += delta;
      drawColoredLine(length);
    } else {
      drawColoredLine(length);
    }
    left(120);
  }
}
triangleChameleonShuriken();
