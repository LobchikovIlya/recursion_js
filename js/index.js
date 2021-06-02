`use strict`;
// Реализовать возведение в целую степень. (pow(base, exponent) => base**exponent, где base любое число, exponent - натуральное (1, 2, 3) или * целое число(-2, -1, 0, 1, 2)).



// function pow(base, exponent) {
//     if (exponent === 1) {
//         return base;
//     } else if (exponent < 0) {
//         return 1 / (base * pow(base, Math.abs(exponent) - 1));
//     } else if (exponent === 0) {
//         return 1;
//     } else
//         return base * pow(base, exponent - 1)
// }
// console.log(pow(4, 3));


// Реализовать вывод в консоль скобок (// bracketWrapper3(3); // => сразу в консоль)


function bracketWrapper3(n) {
    function count(n) {
        console.log('(');
        if(n == 1) {
            return console.log(')');}
        else  count(n - 1)
        console.log(')');
        
    
    }
    console.log(count(n));
}
 

bracketWrapper3(3);



