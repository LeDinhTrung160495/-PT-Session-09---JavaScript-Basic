let number = parseInt(prompt('Nhập số:'));
let remainder = number % 3 == 0 ? 0 : number % 3 == 1 ? 1 : 2;
console.log('Số dư khi chia cho 3 là: ' + remainder);
