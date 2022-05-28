//Task 26

// function radioActiveSign() {
//   for (let i = 1; i < 197; i++) {
//     i % 2 == 1 ? colour(255, 0, 0, 1) : colour(0, 0, 255, 1);
//     forward(1.5*i);
//     left(60);
//   }
// }
// radioActiveSign();

//Task 27
// function rotatedRadioActiveSign() {
//   for (let i = 1; i < 347; i++) {
//     i % 2 == 1 ? colour(255, 0, 0, 1) : colour(0, 0, 255, 1);
//     forward(i);
//     left(60);
//     i%3==1?right(3):left(0);
//   }
// }
// rotatedRadioActiveSign();

//Task 28
// function rotatingSquare() {
//   width(10);
//   for (let squares = 0; squares < 8; squares++) {
//     squares % 2 === 1 ? colour(0, 0, 255, 1) : colour(255, 0, 0, 1);
//     for (let i = 0; i < 4; i++) {
//       forward(200);
//       left(90);
//     }
//     left(45);
//   }
// }
// rotatingSquare();

//Task 29 +30

// function rotatingColoredSquares(){
//   width(2)
//   for(let squares = 0;squares<24;squares++){
//     squares%3===2?colour(138,43,226,1):squares%3==1?colour(205,133,63,1):colour(100,149,237,1);
//     for (let i = 0; i < 4; i++) {
//             forward(200);
//             left(90);
//           }
//           left(15);
//   }
// }
// rotatingColoredSquares();
// function rotatingColoredNAngle(n){
//     width(5)
//     for(let squares = 0;squares<120;squares++){
//       squares%3===2?colour(138,43,226,1):squares%3==1?colour(205,133,63,1):colour(100,149,237,1);
//       for (let i = 0; i < 5; i++) {
//               forward(200);
//               left(72);
//             }
//             left(15);
//     }
//   }
//   rotatingColoredNAngle();

//Task 15 + 16
// function drawCircle(r){
//     goto(r,0);
//     const unit = Math.PI*r/180;
//     for(let i=0;i<2*Math.Pi*r;i+=unit){
//         forward(unit);
//         left(1);
//     }
//     goto(0,0)
// }
// drawCircle(250);

// function drawCircle() {
//   colour(255, 0, 0, 1);
//   goto(180 / Math.PI, 0);
//   for (let i = 0; i < 360; i++) {
//     forward(1);
//     left(1);
//   }
//   goto(0, 0);
// }
// function drawPentAngles(pentAnglesNumber) {
//   colour(0, 0, 255, 1);
//   for (let j = 0; j < pentAnglesNumber; j++) {
//     left(360 / pentAnglesNumber);
//     for (let i = 0; i < 5; i++) {
//       forward(100);
//       left(72);
//     }
//   }
// }
// function drawCircleWithPentAngles(num){
//     drawCircle();
//     drawPentAngles(num);
// }
//Solution 15 drawCircleWithPentAngles(3);
//Solution 16d rawCircleWithPentAngles(3);

//Task 31
// function drawIncludedNAngles(n) {
//   width(3);
//   right(90);
//   goto(-100, -300);
//   for (n; n > 0; n--) {
//     colour(n*15,0,0,1);
//     for (let j = 0; j < n; j++) {
//       forward(100);
//       left(360 / n);
//     }
//   }
// }
// drawIncludedNAngles(13);