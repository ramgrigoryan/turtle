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
colour(r,g,b,a) 	   //ընտրել գույն() */

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
function rotatingColoredNAngle(n){
  width(5)
  for(let squares = 0;squares<120;squares++){
    squares%3===2?colour(138,43,226,1):squares%3==1?colour(205,133,63,1):colour(100,149,237,1);
    for (let i = 0; i < 5; i++) {
            forward(200);
            left(72);
          }
          left(15);
  }
}
rotatingColoredNAngle();