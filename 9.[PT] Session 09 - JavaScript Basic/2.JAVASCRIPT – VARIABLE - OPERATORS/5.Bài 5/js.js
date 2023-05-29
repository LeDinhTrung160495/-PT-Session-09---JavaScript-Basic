let rate = Number(prompt('Nhập vào hệ số lương:'));
let basicSalary = +prompt('Nhập vào lương cơ bản:');
let commission = parseFloat(prompt('Nhập vào tỷ lệ hoa hồng'));
let basic = (rate + commission) * basicSalary;
document.write('Lương cơ bản là:', basic);
