function bai1(n) {
    n = parseFloat(prompt("Nhập số bất kỳ : "));
    let square = n * n;
    document.write("Bình phương của " + n +" = " + square);
}

function bai2(r) {
    r = parseFloat(prompt("Nhập bán kính : "));
    const PI = 3.14;
    let dienTich = r * r * PI;
    let chuVi = r * 2 * PI;

    document.write("diện tích hình tròn là : " + dienTich);
    document.write("<br/>");
    document.write("chu vi hình tròn là : " + chuVi);
}

function bai3(n) {
    n = parseInt(prompt("Tính giai thừa của :  "));
    let giaiThua = 1;
    for(let i = n; i > 0; i--){
        giaiThua = giaiThua * i;
    }

    document.write("!" + n + " = " + giaiThua);
}

function bai4(n) {
    n = prompt("Nhập ký tự bất kỳ : ");
    if(isNaN(n)){
        document.write("false");
    }else{
        document.write("true");
    }
}

function bai5(a,b,c) {
    a = parseInt(prompt("Nhập số nguyên thứ nhất : "));
    b = parseInt(prompt("Nhập số nguyên thứ hai : "));
    c = parseInt(prompt("Nhập số nguyên thứ ba : "));
    let min = a;
    if(b < min){
        min = b;
    }
    if(c < min){
        min = c;
    }

    document.write("min trong 3 số " + a + "," + b + "," + c + " là : " + min );
}

function bai6(n) {
    n = parseInt(prompt("Nhập vào số nguyên bất kỳ : "));
    if(n > 0 ){
        document.write(n + " là số nguyên dương");
    }else{
        document.write(n + " là số nguyên âm");
    }
}

function bai7(a,b) {
    a = parseInt(prompt("Nhập vào số nguyên thứ 1 : "));
    b = parseInt(prompt("Nhập vào số nguyên thứ 2 : "));
    let temp = a;
    a = b;
    b = temp;
    document.write("sau khi đổi chỗ là : " + a + "," + b);
}

function bai8() {
    let arr = [26,5,97,10,10,96];
    let first = 0;
    let last = arr.length-1;
    while(first < last){
        let b = arr[first];
        arr[first] = arr[last];
        arr[last] = b;
        first++;
        last--;
    }
    document.write(arr);
}

function bai9() {
    let x = prompt("Nhập mảng các ký tự : ");
    let arr = x.split(',');
    let char = prompt("Nhập ký tự cần tìm : ");
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(char === arr[i]){
            count++;
        }
    }
    document.write("Ký tự " + char + " xuất hiện " + count + " lần");
}

