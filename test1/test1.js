
setInterval(() => {
    var curDate = new Date();
    var curDay = curDate.getDate();
    
    var curMonth = curDate.getMonth() + 1;
    var curYear = curDate.getFullYear();

    var hours = curDate.getHours();

    var minus = curDate.getMinutes();

    var second = curDate.getSeconds();

    
    // Gán vào thẻ HTML
    if(document.getElementById('day')){
        document.getElementById('day').innerHTML = curDay;
    }
    if(document.getElementById('month')){
        document.getElementById('month').innerHTML = curMonth;
    }
    if(document.getElementById('year')){
        document.getElementById('year').innerHTML = curYear;
    }
    if(document.getElementById('hours')){
        document.getElementById('hours').innerHTML = hours;
    }
    if(document.getElementById('minus')){
        document.getElementById('minus').innerHTML = minus;
    }
    if(document.getElementById('second')){
        document.getElementById('second').innerHTML = second;
    }
    
}, 1000)

function submit(){
    var ten
    var tuoi
    ten=document.getElementById("name").value;
    tuoi=document.getElementById("age").value;
    console.log(ten, tuoi)

    window.localStorage.setItem('tenstore', ten);
    window.localStorage.setItem('tuoistore', tuoi);
    alert("đã lưu thành công !")
    
}

function kt(){
    var ten = window.localStorage.getItem("tenstore")
        var tuoi = window.localStorage.getItem("tuoistore")
    if( ten && tuoi){
        

        alert("Tên: "+ten+" Tuổi: "+tuoi)
        
    }
    else{
        alert("No information")
    }
}

function xoa(){
    window.localStorage.removeItem("tenstore");
    window.localStorage.removeItem("tuoistore");
    alert("đã xóa thành công")
}





// -- Function: Input (a, b) number
// output: a + b

// setInterval(() => {


// //     var ngayhomnay = new Date();
// //     document.getElementById('ngay').innerHTML = ngayhomnay.toLocaleString()

// // },1000)