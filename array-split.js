const num = [1,2,3,4,5,6,7,8,9];
// const part1 = num.slice(1 ,5);

const removed = num.splice(2, 5, 77, 55, 88);
// console.log(removed);
// console.log(num);
const together = num.join(" ");
console.log(together);
