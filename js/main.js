var danhSachdiem = [];
var tbody = document.getElementById("tblBody");

// var scores = tbody.rows[0].cells[3].innerHTML;
// var scores = tbody.rows[1].cells[3].innerHTML;
// var scores = tbody.rows[2].cells[3].innerHTML;
// var scores = tbody.rows[3].cells[3].innerHTML;
// var scores = tbody.rows[4].cells[3].innerHTML;
// var scores = tbody.rows[5].cells[3].innerHTML;
// var scores = tbody.rows[6].cells[3].innerHTML;

function layDanhSachDiem() {
  for (var i = 0; i < tbody.rows.length; i++) {
    var dtb = tbody.rows[i].cells[3].innerHTML * 1;
    danhSachdiem.push(dtb);
  }
  console.log(danhSachdiem);
}
layDanhSachDiem();

function getEle(id) {
  return document.getElementById(id);
}
/*-----------------------------------------------------------------------*/
getEle("btnSVCaoDiemNhat").addEventListener("click", function () {
  /*
        Tạo biến max = danhSachdiem[0]
        Duyệt mảng danhSachdiem, var i = 1
        Nếu max bé hơn phần tử kế tiếp trong mảng
        => max = phần tử kế tiếp bên trong mảng
    */
  // svienDiem__caoNhat();
  var f0 = danhSachdiem[0];
  var index = 0;
  for (var i = 1; i < danhSachdiem.length; i++) {
    if (f0 < danhSachdiem[i]) {
      f0 = danhSachdiem[i];
      index = i; //Nếu điều kiện đúng nó mới thực hiện, nên có i = 3;
    }
  }
  console.log(f0);
  console.log(index);
  var ten_Caonhat = tbody.rows[index].cells[2].innerHTML;
  var kq = "Tên: " + ten_Caonhat + " - " + f0;
  console.log(ten_Caonhat);
  getEle("svGioiNhat").innerHTML = kq;
});
/*-----------------------------------------------------------------------*/
// function svienDiem__caoNhat() {
//   var f0 = danhSachdiem[0];
//   for (var i = 1; i < danhSachdiem.length; i++) {
//     if (f0 < danhSachdiem[i]) {
//       f0 = danhSachdiem[i];
//     }
//   }
//   console.log(f0);
// }
// svienDiem__caoNhat();

//getEle("btnSoVSGioi").addEventListener("click",function(){
/*
        1. Tạo biến count = 0;
        2. Duyệt mảng danhSachdiem
        3. Viết hàm xếpLoại();
        >=8 Giỏi
        >6 <8 Khá
        >=9 Xuất sắc
        >=5 <=6 Tb
        <3.5 Yếu
        4. So sánh, nếu xếpLoại(dtb) === "Giỏi"
        => Tăng biến count;
        5. Show
    */
//})

function xepLoai(dtb) {
  if (dtb >= 8) {
    return "Gioi";
  } else if (dtb <= 6 && dtb < 8) {
    return "Kha";
  } else if (dtb >= 5 && dtb < 6) {
    return "Tbinh";
  } else if (dtb < 5) {
    return "Yeu";
  }
}
function hoanVi(a, b) {
  var c;
  c = a;

  //b = c; - Để dòng này ở đây là bao không ra!

  a = b;

  b = c;
}
/*-----------------------------------------------------------------------*/
getEle("btnSVThapDiemNhat").addEventListener("click", function () {
  /*
        Tạo biến max = danhSachdiem[0]
        Duyệt mảng danhSachdiem, var i = 1
        Nếu max bé hơn phần tử kế tiếp trong mảng
        => max = phần tử kế tiếp bên trong mảng
    */
  // svienDiem__caoNhat();
  var f0 = danhSachdiem[0];
  var index = 0;
  for (var i = 1; i < danhSachdiem.length; i++) {
    if (f0 > danhSachdiem[i]) {
      f0 = danhSachdiem[i];
      index = i; //Nếu điều kiện đúng nó mới thực hiện, nên có i = 3;
    }
  }
  console.log(f0);
  console.log(index);
  var ten_Thapnhat = tbody.rows[index].cells[2].innerHTML;
  var kq = "Tên: " + ten_Thapnhat + " - " + f0;
  console.log(ten_Thapnhat);
  getEle("svYeuNhat").innerHTML = kq;
});
/*-----------------------------------------------------------------------*/
getEle("btnSoSVGioi").addEventListener("click", function () {
  var count__SV__gioi = 0;
  //Do bài không có đề cập gì về số điểm của Xếp loại;
  //Nên mình tự cho >=8  là Giỏi;
  for(var i = 0; i < danhSachdiem.length; i++)
  {
    if(danhSachdiem[i] >= 8)
    {
      count__SV__gioi++;
    }
  }
  getEle("soSVGioi").innerHTML=count__SV__gioi + " sinh viên";

});
/*-----------------------------------------------------------------------*/
getEle("btnSVDiemHon5").addEventListener("click", function () {
  //Yêu cầu >5; thì Được thì xuất ra Tên kèm Điểm
  //Đọc kỹ yêu cầu là xuất ra DANH SÁCH, mà đã là DANH SÁCH thì nó là
  //mảng
  //
  var danhsach__SV__lonhon5 = [];
  var index__SV_lonhon5 = [];
  
  for(var i = 0; i < danhSachdiem.length; i++)
  {
    if(danhSachdiem[i] >= 5)
    {
      danhsach__SV__lonhon5.push(danhSachdiem[i]);
      index__SV_lonhon5.push(i);
    }
  }
  //Đã log ra được danh sách rồi, mà ds này là giá trị thôi;
  console.log(danhsach__SV__lonhon5);
  //Cần phải log thêm ra được DS index của SV lonHon5;
  console.log(index__SV_lonhon5);
  //Giờ là có i, chạy đặng in ra tên
  //Trước là i chỉ có 1 giá trị, hiện tại i là một danh sách;

  //Khúc này mình không cần so sánh 2 mảng nữa, mình nghĩ là đem trực tiếp nó
  //vào luôn ở trên là xong;
  var content__ = "";
  for(var m = 0; m < danhSachdiem.length; m++)
  {
    for(var n = 0; n < danhsach__SV__lonhon5.length; n++)
    {
        if(danhSachdiem[m] == danhsach__SV__lonhon5[n])
      {
        content__ += tbody.rows[m].cells[2].innerHTML + " - " + danhSachdiem[m] + "<br>";
      }
    }
  }
  var KQQ = content__ ;
  console.log(KQQ);
  // var ten__SV__lonhon5 = tbody.rows[index].cells[2].innerHTML;
  // var kq = "Tên: " + ten_Thapnhat + " - " + f0;
  // console.log(ten_Thapnhat);

  getEle("dsDiemHon5").innerHTML = KQQ;
});
/*-----------------------------------------------------------------------*/
//Sắp xếp tăng dần
function sapXeptangDan(danhSachdiem) {
  // var f0 = danhSachdiem[0];
  for (var i = 0; i < danhSachdiem.length - 1; i++) {
    for (var j = i + 1; j < danhSachdiem.length; j++) {
      if (danhSachdiem[i] > danhSachdiem[j]) {
        var Virtual__A = danhSachdiem[i];

        // danhSachdiem[j] = Virtual__A;

        danhSachdiem[i] = danhSachdiem[j];

        danhSachdiem[j] = Virtual__A;

        //Vị trí để trước sau cực kỳ quan trọng nhen!

        // hoanVi(danhSachdiem[i], danhSachdiem[j]);
      }
      // else - Không cần else nó vẫn hiểu!
      // {
      //   var Virtual__B = danhSachdiem[i];
      //   var Virtual__C = danhSachdiem[j];
      //   danhSachdiem[i] = Virtual__B;
      //   danhSachdiem[j] = Virtual__C;
      // }
    }
  }
  return danhSachdiem;
}

// var inKQ001 = sapXeptangDan(danhSachdiem);
// console.log(inKQ001);

//Giờ chỉ cần viết sự kiện vào là xong;
getEle("btnSapXepTang").addEventListener("click",function () {
  sapXeptangDan(danhSachdiem);
  var content__Ds_Tagdan = "";
  for(var i = 0; i < danhSachdiem.length; i++)
  {
    content__Ds_Tagdan += tbody.rows[i].cells[2].innerHTML + " - " + danhSachdiem[i] + "<br>";
  }
  var KQ_QQ = content__Ds_Tagdan;
  getEle("dtbTang").innerHTML = content__Ds_Tagdan;
})

