function maxAndMin(num1,num2,num3){

    var max = 0;
    let min = 0;

if (num1 > num2 && num1 > num3){
    max = num1;
}
else if (num2> num1 && num2 > num3){
    max = num2;
}
else {
    max = num3;
}
if (num1 < num2 && num1 < num3){
    min = num1;
}
else if (num2 < num1 && num2 < num3){
    min = num2;
}
else { 
    min = num3;
}
console.log(max + " " + "is the maximum number");
console.log(min + " " + "is the minimum number");

}

console.log(maxAndMin(708,18,15))