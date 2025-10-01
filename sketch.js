
let colSize, rowSize,col1,col2,col3,col4,col5,col6,col7,row1,row2,row3,row4,row5,row6,row7;
let angle1,angle2,angle3,angle4;

function setup() {
createCanvas(windowWidth,windowHeight);
angleMode(DEGREES);

angle1=0;
angle2=0;
angle3=0;
angle4=0;

colSize=width/8;
rowSize=height/8;

col1=colSize;
col2=colSize*2;
col3=colSize*3;
col4=colSize*4;
col5=colSize*5;
col6=colSize*6;
col7=colSize*7;

row1=rowSize;
row2=rowSize*2;
row3=rowSize*3;
row4=rowSize*4;
row5=rowSize*5;
row6=rowSize*6;
row7=rowSize*7;


}

function draw() {
background(100,100,250,30);

// //grid draw
// stroke(255);
// //col
// line(col1,0,col1,height);
// line(col2,0,col2,height);
// line(col3,0,col3,height);
// line(col4,0,col4,height);
// line(col5,0,col5,height);
// line(col6,0,col6,height);
// line(col7,0,col7,height);
// //row
// line(0,row1,width,row1);
// line(0,row2,width,row2);
// line(0,row3,width,row3);
// line(0,row4,width,row4);
// line(0,row5,width,row5);
// line(0,row6,width,row6);
// line(0,row7,width,row7);

//my paint
noStroke();
fill(90,20,20);
triangle(0,0,0,height,width,height);
fill(190,10,220);
triangle(col3,row3,width,row3,width,height);

fill(10,150,200);
rect(0,row6,colSize*5,rowSize*2);

fill(70,10,190);
rect(0,row3,colSize*3,rowSize*3);

push();
translate(col4,row3+row3/2); 
fill(224,95,10);
rectMode(CENTER);
rotate(angle1);
rect(0,0,colSize*3,rowSize*4);
pop();


push();
translate(col4,row5); 
rectMode(CENTER);
fill(224,25,130);
rotate(angle2);
rect(0,0,colSize*2,rowSize*3);
pop();


push();
stroke(0);
strokeWeight(4);

let cirSize = rowSize*1.6;
translate(col7,row1);
fill(234,193,62);
rotate(angle3); //do it before circle
circle(0,0,cirSize);
line(0,0,cirSize/2,0);


pop();


angle1 +=2;
angle2 -=0.8;
angle3 +=22;


}
