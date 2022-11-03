/*Since 15% of the wall is filled with mortar therefore the volume of the wall that needs to
be filled with brick is 85%.
Volume of 1 brick is 24x12x8 cm^3
Therefore the amount of brick needed to fill 85% of the volume of the wall is:
Number of bricks = (0.85 * 24 * 8 * 0.6 * 100^3 ) / ( 24 * 12 * 8 )*/
//Dimention of bricks are given
let L=24;   //CM
let B=12;   //cm
let H=8;    //cm
let VolumeOfBricks = L*B*H;
// Dimention of wall are given
let l=24; //m
let b=8; //m
let h=0.6; //m
VolumeOfWall = l*b*h*Math.pow(100,3);    //1 m = 100 cm;
let NoOfBricks = Math.ceil(VolumeOfWall*0.85/VolumeOfBricks);
console.log(NoOfBricks);