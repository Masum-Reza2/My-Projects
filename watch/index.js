setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrotation = 30*htime + mtime/2; //forlmula for hour to rotate
    mrotation = 6*mtime; //formula for minute to ratate
    srotation = 6*stime; //formula for second to ratet

    hour.style.transform = `rotate(${hrotation}deg)`  //rotate(90deg)
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`
}, 1000);