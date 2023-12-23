setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrot = 30*htime + mtime/2;
    mrot = 6*mtime;
    srot = 6*stime;
    let hHand = document.querySelector(".hours");
    let mHand = document.querySelector(".minutes");
    let sHand = document.querySelector(".seconds");
    hHand.style.transform = `rotate(${hrot}deg)`;
    mHand.style.transform = `rotate(${mrot}deg)`;
    sHand.style.transform = `rotate(${srot}deg)`;
}, 1000);