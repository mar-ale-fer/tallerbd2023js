/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
const X0 = parseInt(inputs[0]);
const Y0 = parseInt(inputs[1]);

let x1 = 0
let x2 = W

let y1 = 0
let y2 = H

let first_step = true
let nextX = X0; //Math.floor(x2 - x1 / 2)
let nextY = Y0; //Math.floor(y2 - y1 / 2)
// game loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    console.error(`x1=${x1},nextX=${nextX},x2=${x2},bombdir=${bombDir}`);
    //Horizontal----------
    if ( ['DL', 'L', 'UL'].includes(bombDir) ) { //to the left 
        x2 = nextX-1
        nextX = Math.floor((x2 + x1) / 2)
    } else if ( ["DR", "R", "UR"].includes(bombDir) ) { //to the right
        x1 = nextX+1
        nextX = Math.floor((x2 + x1) / 2)
    } else {
        //In horizontal line with the bomb
        //No change in x
    }


    //Vertical--------
    if ( ["U", "UR", "UL"].includes(bombDir) ) { //to the top
        y2 = nextY-1
        nextY = Math.floor((y2 + y1) / 2)
    } else if ( ["DR", "D", "DL"].includes(bombDir) ) { //to the bottom
        y1 = nextY+1
        nextY = Math.floor((y2 + y1) / 2)
    } else {
        //In vertical column with the bomb
       //no change in y
    }
    

    // the location of the next window Batman should jump to.

    console.log(`${nextX} ${nextY}`);
    first_step = false
}
