// GROUP ASSIGNMENT
// example 1
// *
// **
// ***
// ****
// *****
// ******

// example 2
// ******
// *****
// ****
// ***
// **
// *

// example 3
//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *


// example 4
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// example 5
//*******
//      *
//      *
//      *
//      *
//      *
//      *
//      *

// example 6
//*******
//*
//*
//*
//*
//*
//*

 console.log('Exercise 1');
let x = "*"
let arr = [];

//console.log(x)
for(let i = 1; i <= 6; ++i) {
    console.log(x);
    x += '*';
    arr.push('*')
}

console.log('Exercise 2');
for(let j=7; j>=1; j--) {
    console.log(arr.join(''));
arr.pop('*');
}

console.log('Exercise 3')
let y = ['', '', '', '', ''];
for(let a = 4; a >= 0; a--){
    y[a] = '*';
    console.log(y.join(''))
}
for(let b = 0; b <=4; b++ ){
    y[b] = '';
    console.log(y.join(''))
}

/*console.log('Exercise 4')
let p = ['', '', '', '', '','', '', '','' ]
for(let h=1; h >= 8; h++){
     arr.push(2*h-1);
     arr.pop(8-h)
} 
console.log(arr.push. arr.pop join('')); */

/*console.log('Exercise 4');
for(let t=6; t>=1; t--){
let output=''
for(let v=1; v<=1; v++){
    output +='*'
}
console.log(output);
} */

console.log("Exercise 4")
let space2 = 5;
for(i = 1; i <=5;i++){
    console.log(' '.repeat(space2 -i) + '*'.repeat(i)+ '*'.repeat(i-1))
}
for(i = 1; i<=4;i++){
    console.log(' '.repeat(i) +'*'.repeat(space2-i) + '*'.repeat(4-i));
}

console.log('Exercise 5')
let d= ['*', '*','*','*', '*', '*', '*']
let z =[' ', ' ', ' ', ' ',' ', ' ','*']
console.log(d.join(''))
for(let d=0; d <= 6; d++){
    console.log(z.join(''))
}

/*console.log('Exercise 6')

let k = ['*', ' ', ' ', ' ',' ',' ',' '];
console.log(d.join(''));
for(let f = 0; f <= 6; f++){
    console.log(k.join(''))
}*/

console.log('Exercise 6')
let q =8;
console.log('********');
for(let i =1; i <q; i++) {
    console.log('*       ')
}

