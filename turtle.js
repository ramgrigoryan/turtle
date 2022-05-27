/*
forward(distance)  //գնալ առաջ (հեռավորություն)
right(angle)            //աջ (անկյուն)
left(angle) 	     //ձախ (անկյուն)	
goto(x,y) 	     //գնա (x կորդինատ, y կորդինատ)
clear() 	                  //մաքրել
penup() 	    //բարձրացնել մատիտը
pendown() 	    //իջեցնել մատիտը
reset() 	                 //սկսել սկզբից, ջնջել ամեն ինչ ....
angle(angle)	   //անկյուն	 
width(width)       //մատիտի հաստությունը(հաստություն)
colour(r,g,b,a) 	   //ընտրել գույն()
*/

// Task 1 + 2 +3
// function canonicalNAngle(n) {
//     for (let i = 0; i < n; i++) {
//         forward(100);
//         left(360/n);
//     }
// }
//canonicalNAngle(3);
//canonicalNAngle(4);
//canonicalNAngle(6);

//Task 4 + 5

// function drawStar(color) {
//   const definedColors = {
//     INDIANRED: [205, 92, 92],
//     DARKRED: [139, 0, 0],
//     DEEPPINK: [255, 20, 147, 1],
//     CORAL: [255, 127, 80],
//     ORANGE: [255, 165, 0],
//     GOLD: [255, 215, 0],
//     KHAKI: [240, 230, 140],
//   };

//   const [r, g, b] = definedColors[color];
//   if (definedColors[color]) {
//     colour(r, g, b, 1);
//   } else {
//     colour(0, 0, 0, 1);
//   }
//   for (let i = 0; i < 50; i++) {
//     forward(100);
//     goto(0, 0);
//     left(360 / 50);
//   }
// }
//drawStar("CORAL");

//Task 6
// function drawStar(color, origin, length) {
//   let [x, y] = origin;
//   const [r, g, b] = color;
//   goto(x, y);
//   colour(r, g, b, 1);
//   for (let i = 0; i < 50; i++) {
//     forward(length);
//     goto(x, y);
//     left(360 / 50);
//   }
// }
// drawStar([255, 0, 0, 1], [0, 0], 200);
// drawStar([0, 155, 0, 1], [-200, -200], 100);
// drawStar([0, 0, 198, 1], [269, 274], 70);

// Task 7 + 8

// function drawLabirinth(n){
//     let length = 150;
//     for(let i=0;i<15;i++){
//         forward(length-8*i);
//         left(360/n);
//     }
// }
// drawLabirinth(3);
// drawLabirinth(5);

// Task 9 + 10 + 11

// function drawRussianStuckyNAngle(n) {
//     for(let length=150;length>5;length-=10){
//         for(let i=0;i<n;i++){
//             forward(length);
//             left(360/n);
//         }
//     }
// }
//drawRussianStuckyNAngle(4);
//drawRussianStuckyNAngle(3);
//drawRussianStuckyNAngle(5);

//Task 12

// function drawFlowerLeaf() {
//     let length =150
//     for(let delta = 5;delta<120;delta+=8)
//     {
//         forward(length-delta);
//         goto(0,0);
//         left(5);
//     }
// }
// drawFlowerLeaf();

//Task 13
// function drawFlowerLeaf() {
//     colour(0,0,255,1);
//   for (let i = 0; i < 4; i++) {
//     let length = 150;
//     angle(90*i)
//     for (let delta = 5; delta < 120; delta += 8) {
//       forward(length - delta);
//       goto(0, 0);
//       left(5);
//     }
//   }
// }
// drawFlowerLeaf();

//Task 14
// function canonicalNAngle(nAngle,a){
//     for(let i=0;i<nAngle;i++){
//         forward(a);
//         left(360/nAngle);
//     }
// }
// canonicalNAngle(360,2);

//Task 17

// function drawStar() {
//     colour(0,0,255,1);
//   const lines = [
//     181, 137, 325, 278, 274, 313, 56, 171, 223, 279, 122, 195, 102, 275, 296,
//     188, 145, 142, 91, 213, 249, 344, 211, 170, 119, 98, 251, 205, 128, 184,
//     116, 271, 171, 127, 318,
//   ];
//   for(let i=0;i<lines.length;i++){
//       forward(lines[i]);
//       goto(0,0);
//       left(10);
//   }
// }
// drawStar();

// Task 18

// function drawFlowers() {
//   let flowers = [
//     [100, 100, 80],
//     [-200, 65, 120],
//     [111, -226, 120],
//     [-52, -288, 56],
//     [-15, 271, 70],
//     [252, -11, 45],
//   ];

//   let colors = [
//     [52, 152, 219],
//     [160, 64, 0],
//     [39, 174, 96],
//     [127, 179, 213],
//     [46, 64, 83],
//     [192, 57, 43],
//   ];
//   for(let i=0;i<flowers.length;i++){
//       let [x,y,r] = flowers[i];
//       colour(colors[i][0],colors[i][1],colors[i][2],1);
//       goto(x,y);
//       for(let j=0;j<36;j++){
//           forward(r);
//           goto(x,y);
//           left(10);
//       }
//   }
// }
// drawFlowers();

//Task 19

// function filledTriangle (){
//     colour(0,0,255,1);
//     for(let length=100;length>0;length--){
//         for(let j=0;j<3;j++){
//             forward(length);
//             left(120);
//         }
//     }
// }
// filledTriangle();

//Task 20

// function generateCoords(){
//     let coords = [Math.random()*350,Math.random()*350];
//     let firstSign = Math.random();
//     let secondSign = Math.random();
//     if(firstSign<0.5){
//         coords[0] = -coords[0]
//     }
//     if(secondSign<0.5){
//         coords[1]= -coords[1];
//     }
//     return coords;
// }

// function pseudoChaoticLines(){
//     for(let i=0;i<200;i++){
//         goto(generateCoords()[0],generateCoords()[1]);
//         colour(Math.random()*255,Math.random()*250,Math.random()*250,1);
//         width(Math.random()*5);
//         forward(Math.random()*200);
//     }
// }
// pseudoChaoticLines();

//Task 21+22+23+24

const randomNumber = (from, to) =>
  Math.round(from + (to - from) * Math.random());

// function pseudoChaoticNet(){
//     for(let i=0;i<200;i++){
//         colour(randomNumber(0, 255),randomNumber(0, 255),randomNumber(0, 255), 1);
//         width(randomNumber(0,5));
//         forward(randomNumber(0,200));
//         left(2);
//         goto(0,0);
//     }
// }
// pseudoChaoticNet();

// function pseudoChaoticRedNet(){
//     for(let i=0; i < 200; i++){
//         colour(randomNumber(0, 255), 0, 0, 1);
//         width(randomNumber(0,5));
//         forward(randomNumber(0,200));
//         left(2);
//         goto(0,0);
//     }
// }
// pseudoChaoticRedNet();

// function drawBrownMovement() {
//   for (let i = 0; i < 400; i++) {
//     i<200?colour(255, 0, 0, 1):colour(0, 0, 255, 1)
//     forward(randomNumber(0,50));
//     left(randomNumber(0,360));
//   }
// }
// drawBrownMovement();

// function drawTubes() {
//   for (let i = 0; i < 400; i++) {
//     if (i % 3 == 0) {
//       colour(221, 160, 221, 1);
//     } else if (i % 3 == 1) {
//       colour(255, 99, 71, 1);
//     } else {
//       colour(135, 206, 235, 1);
//     }
//     forward(randomNumber(0, 50));
//     left(90 * randomNumber(1, 5));
//   }
// }
// drawTubes();

//Task 25
function drawFlower(){
  colour(0,0,200,1);
  for(let i=0;i<360;i+=5){
    forward(250);
    goto(0,0);
    left(5);
  }
  colour(0,200,0,1);
  left(2.5)
  for(let i=0;i<360;i+=5){
    left(5);
    forward(200);
    goto(0,0);
  }
}
drawFlower();