/*Bài tập 1: Tính tiền lương nhân viên
 * Đầu vào:
 *  - Lương 1 ngày : 100.000
 *  - số ngày làm :  10
 * Xử lý:
 *  - Lương = lương 1 ngày * số ngày làm
 * Đầu ra 
 *  - In ra Lương của nhân viên
 */

// Bài tập 1
// Đầu vào
var luongMotNgay = 100000;

// Xử lý
document.getElementById('btnLuong').onclick = function () {
    var soNgayLam = document.getElementById('soNgay').value;
    var soNgayLam = parseInt(soNgayLam)
    var luong = luongMotNgay * soNgayLam;
    // Đầu ra
    document.getElementById('info_luong').innerHTML = 'Lương của nhân viên là ' + luong + ' VND';
}

/**Bài Tập 2: Tính giá trị trung bình
 * Đầu vào:
 *  - 5 số thực
 * Xử lý:
 *  - Tính tổng của 5 số thực
 *  - giá trị trung bình bằng tổng chia cho 5
 * Đầu ra:
 *  - In ra giá trị trung bình
 */

// Bài tập 2
document.getElementById('btnTinh').onclick = function () {
    // Đầu vào 
    var no_1 = document.getElementById('no_1').value;
    var no_2 = document.getElementById('no_2').value;
    var no_3 = document.getElementById('no_3').value;
    var no_4 = document.getElementById('no_4').value;
    var no_5 = document.getElementById('no_5').value;

    // Xử lý
    no_1 = parseFloat(no_1);
    no_2 = parseFloat(no_2);
    no_3 = parseFloat(no_3);
    no_4 = parseFloat(no_4);
    no_5 = parseFloat(no_5);
    var sum = no_1 + no_2 + no_3 + no_4 + no_5;
    var avg = sum / 5;
    // Đầu ra
    document.getElementById('info_Tinh').innerHTML = ' Giá trị trung bình của 5 số thực là: ' + avg;

}


/**Bài tập 3
 * Đầu vào:
 *  - Tỷ giá của 1 USD: 23500
 *  - Số tiền USD của người dùng: 5
 * Xử lý
 *  - Tiền quy đổi = tỷ giá * số tiền USD
 * Đầu ra:
 *  - IN ra giá trị quy đổi
 */

// Bài tập 3
// Đầu vào
document.getElementById('btnVND').onclick = function () {
    var tygia = 23500;
    var usd = document.getElementById('usd').value
    // Xử lý
    var vnd = tygia * usd;
    //Đầu ra

    document.getElementById('info_VND').innerHTML = usd + ' USD quy ra VND là :' + vnd + ' VND';

}
/**
 * Bài tập 4
 * Đầu vào:
 *  - Chiều rộng của hình chữ nhật
 *  - Chiều dài của hình chữ nhật
 * Xử lý:
 *  - Chu vi bằng tổng chiều dài và chiều rộng nhân 2
 *  - Diện tích bằng chiều dài nhân chiều rộng 
 * Đầu ra:
 *  - In ra chu vi và dien tich cua hinh chữ nhật;
 */
document.getElementById('btnHCN').onclick = function () {
    // Đầu vào
    var chieudai = parseFloat(document.getElementById('chieudai').value);
    var chieurong = parseFloat(document.getElementById('chieurong').value);
    // Xử lý
    var chuvi = (chieudai + chieurong) * 2;
    var dientich = chieudai * chieurong;
    // Đầu ra
    var hcn = "chu vi hình chữ nhật là: " + chuvi + "<br>" + "diện tích hình chữ nhật là: " + dientich;
    document.getElementById('info_HCN').innerHTML = hcn;

}


/**Bài tập 5
 * Đầu vào:
 *  - một số thực có 2 số   
 * Xử lý:
 *  - lấy ra giá trị hàng đơn vị
 *  - lấy ra giá trị hàng chục
 *  - tổng 2 ký số : hàng đơn vị + hàng chục
 * Đầu ra:
 *  - In ra tổng 2 ký số 
 */
document.getElementById('btnThuc').onclick = function () {
    // Đầu vào
    var sothuc = document.getElementById('sothuc').value;
    // Xử lý
    var donvi = sothuc % 10;
    var chuc = Math.floor(sothuc / 10);
    var tong = donvi + chuc;
    // Đầu ra
    document.getElementById('info_Thuc').innerHTML = " Tổng của 2 ký số là: " + tong;
}