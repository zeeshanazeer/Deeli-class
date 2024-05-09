function eid() {
    var tarDay = new Date("22 jun 2024");
    var curDate = new Date();
    var diff = tarDay - curDate;

    var ranHou = Math.floor(diff / (1000 * 60 * 60));
    var ranDay = Math.floor(diff / (1000 * 60 * 60 * 24));
    var ransec = Math.floor(diff / 1000);

    console.log(ranHou);

    document.getElementById('box1').innerText = "Remaining Hours" + ranHou;
    document.getElementById('box2').innerText = "Remaining Days" + ranDay;
    document.getElementById('box3').innerText = "Remaining Secs" + ransec;

}

eid();
setInterval(eid , 1000 )
