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
function rotatedRadioActiveSign() {
  for (let i = 1; i < 347; i++) {
    i % 2 == 1 ? colour(255, 0, 0, 1) : colour(0, 0, 255, 1);
    forward(i);
    left(60);
    i%3==1?right(3):left(0);
  }
}
rotatedRadioActiveSign();
