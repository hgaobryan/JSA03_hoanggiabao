
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



// -- Function: Input (a, b) number
// output: a + b

