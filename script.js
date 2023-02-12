var animtxt = document.querySelectorAll(".animtxt");
var i = 0;

animint = setInterval(() => {
    if (i == animtxt.length) {
        clearInterval(animint);
    }
    $(animtxt[i]).fadeIn("slow");
    $(animtxt[i]).fadeOut("slow");
    i++;
}, 1000);

var hearts = document.querySelectorAll(".heart");
$(hearts).animate(
    {
        left: window.innerWidth * 0.5 - window.innerHeight * 0.05 + "px",
        top: 45 + "vh",
    },
    4000
);

setTimeout(() => {
    $("#sun").animate(
        {
            left: window.innerWidth * 0.5 - window.innerHeight * 0.1 + "px",
            top: 0 + "vh",
        },
        3000
    );
    document.body.classList.add("backgroundanim");
    $("#lastmsg").fadeIn("slow");
    $("#face").fadeIn("slow");
}, 5000);
