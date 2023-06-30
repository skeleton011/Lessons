// let x = [5, 4, 3, 6, 10, 30, 43];
// let min = x[0], max = x[0];
// for(let i = 1; i < x.length; i++){
//   if(x[i] < min)
//     min = x[i];
//   if(x[i] > max)
//     max = x[i];
// }
// console.log("Минимальное значение: ", min, "\nМаксимальное значение: ", max);
// let ind1 = x.findIndex(i=>i==min);
// let ind2 = x.findIndex(i=>i==max);
// console.log(x.slice(ind1+1,ind2));




// const lines = 5;
// let result = "";

// for (let i = 0; i <= lines; i++) {
//     // console.log(i);
//     for (let j = 0; j < lines - i; j++) {
//         // console.log("j1",j);
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         // console.log("j2",j);
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

// function returnNeighboringNumbers(number) {

//     let qwe = [];

//     for (let i = 1; i < 5; i++) { 

//         qwe.push(i);
//     }

// console.log(qwe);

// for(i = 0; i == number;i++){
//     if(i > number) break;
// }


// }
// returnNeighboringNumbers(5);

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

console.log(returnNeighboringNumbers(5));