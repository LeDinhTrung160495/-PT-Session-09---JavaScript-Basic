function myFunction() {
  let text = confirm('Bạn có phải học viên Rikkei Academy');
  if (text == true) {
    let studentId = prompt('Nhập mã học viên:');
    let studentName = prompt('Tên học viên:');
    console.log(
      'Mã số sinh viên:' + studentId + ' ' + 'Tên sinh viên:' + studentName
    );
  } else {
    alert('Chương trình kết thúc');
  }
}
