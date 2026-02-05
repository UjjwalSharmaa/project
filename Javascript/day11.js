// Task 1
function calculateTotal(price,gst){
    const gstAmount = price*gst/100;
    return gstAmount+price;
}
console.log(calculateTotal(100,18))

// Task 2
const isEven=(num)=>{
    return num % 2 === 0;
}
console.log(isEven(10));

// Task 3
const sumArray = (numbers) => {
  return numbers.reduce((total, num) => {
    return total + num;
  }, 0);
};
console.log(sumArray([10,20,30]));

