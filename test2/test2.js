const data = [
    {
        price: 200,
        name: 'Bản ủi',
        address: 'Tôn Thất Tùng, TPHCM'
    },
    {
        price: 3000,
        name: 'Máy giặt',
        address: 'Hai Bà Trưng, Quận Phú Nhuận, TPHCM'
    },
    {
        price: 600,
        name: 'Bàn làm việc',
        address: 'Nam Kỳ Khởi Nghĩa, Quận 3, TPHCM'
    },
    {
        price: 1000,
        name: 'Ghế làm việc',
        address: 'Đống đa, Quận 3, Hà Nội'
    },
    {
        price: 25000,
        name: 'Máy tính',
        address: 'Cái bè, Huyện Cái bè, TPHCM'
    },
    {
        price: 9000,
        name: 'Màn hình tivi',
        address: 'Châu Đốc, Kiên Giang'
    },
    {
        price: 30000,
        name: 'Iphone 13',
        address: 'American'
    },
    {
        price: 28000,
        name: 'Samsum s22',
        address: 'Korea',

    }, ]


function sanpham(name,price,address){
    console.log("san pham: "+ name + " gia: "+ price + " dia chi: " + address)
}

function sanPhamMap (item) {
    sanpham(item.name, item.price, item.address)
}

// data.map(sanPhamMap) bai 1

function lonhon(name,price,address){
        if(price >= 25000){
            console.log("san pham: "+ name + " gia: "+ price + " dia chi: " + address)
        }
}

function lonhonmap(data){
    lonhon(data.name, data.price, data.address)
}

// data.map(lonhonmap) bai 2

function nhonhat(name, price, address){
    if(price == 200){
        console.log("san pham: "+ name + " gia: "+ price + " dia chi: " + address)
    }
}

function nhonhatmap(data){
    nhonhat(data.name, data.price, data.address)
}

// data.map(nhonhatmap) bai 3

function lonnhat(name, price, address){
    if(price == 30000){
        console.log("san pham: "+ name + " gia: "+ price + " dia chi: " + address)
    }
}

function lonnhatmap(data){
    lonnhat(data.name, data.price, data.address)
}

// data.map(lonnhatmap) bai 4


   