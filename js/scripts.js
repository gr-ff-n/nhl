window.onload = function () {
    var d = new Date();
    document.getElementById("copyright").innerHTML = d.getFullYear();
}

// When the user scrolls down 350px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById("cornerBtn").style.display = "block";
    } else {
        document.getElementById("cornerBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// countdown source: https://codepen.io/AllThingsSmitty/pen/JJavZN
const target = new Date("June 21, 2026 12:00:00").getTime();

(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;


    const countDown = new Date(target).getTime(),
        x = setInterval(function () {

            const now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
            //seconds
        }, 0)
}());