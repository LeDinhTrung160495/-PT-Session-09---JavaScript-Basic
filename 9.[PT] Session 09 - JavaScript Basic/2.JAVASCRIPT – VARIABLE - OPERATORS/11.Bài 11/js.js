let number1 = Number(prompt('Nhập vào giá trị thứ 1:'));
let number2 = Number(prompt('Nhập vào giá trị thứ 2:'));
let number3 = Number(prompt('Nhập vào giá trị thứ 3:'));
let max = number1;
max = max < number2 ? number2 : max;
max = max < number3 ? number3 : max;
let min = number1;
min = min < number2 ? min : number2;
min = min < number3 ? min : number3;
document.write('Min là: ' + min + '<br>');
document.write('Max là: ' + max);
