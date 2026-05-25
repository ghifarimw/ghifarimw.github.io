var MobileRes = false;
function MobileCheck() {
    console.log(window.innerHeight/window.innerWidth);
    if ((window.innerHeight/window.innerWidth > 1) && (!MobileRes)) {
        MobileRes = true;
        var ch = document.querySelectorAll(".card");
        ch.forEach((element) => {
            if (element.classList.contains("exempt")) {
                return;
            }
            element.style.setProperty("flex-direction","column");
        });
        try {
        document.getElementsByClassName("mp")[0].style.setProperty("flex-direction","column");
        document.getElementsByClassName("mp")[0].style.setProperty("height","75vh");
        document.getElementsByClassName("mp")[0].style.setProperty("text-align","center");
        document.getElementById("face").style.setProperty("max-width","80%");
        } catch {}
        document.getElementsByClassName("control")[0].style.setProperty("display","none");
        document.getElementsByClassName("love")[0].style.setProperty("display","none");
        document.getElementById("title-p").style.setProperty("text-align","center");
        document.getElementById("ttl").style.setProperty("width","100%");
    } else if (MobileRes && (window.innerHeight/window.innerWidth <= 1)) {
        MobileRes = false;
        var ch = document.querySelectorAll(".card");
        ch.forEach((element) => {
            if (element.classList.contains("exempt")) {
                return;
            }
            element.style.setProperty("flex-direction","row");
        });
        try {
        document.getElementsByClassName("mp")[0].style.setProperty("flex-direction","row");
        document.getElementsByClassName("mp")[0].style.setProperty("height","100vh");
        document.getElementsByClassName("mp")[0].style.setProperty("text-align","left");
        document.getElementById("face").style.setProperty("max-width","55%");
        } catch {}
        document.getElementsByClassName("control")[0].style.setProperty("display","flex");
        document.getElementsByClassName("love")[0].style.setProperty("display","inline");
        document.getElementById("title-p").style.setProperty("text-align","left");
        document.getElementById("ttl").style.setProperty("width","55%");
    }
}
MobileCheck();
if (window.location.hash) {
    history.replaceState(null,"",window.location.pathname);
}
window.addEventListener('resize',MobileCheck);
const crl = document.getElementById("scrl");
const ln = document.getElementById("l_nav");
const rn = document.getElementById("r_nav");
function scrollNext() {
  crl.scrollBy({ left: crl.clientWidth, behavior: 'smooth' });
}
function scrollPrev() {
  crl.scrollBy({ left: -crl.clientWidth, behavior: 'smooth' });
}
crl.addEventListener("scroll",() => {
    if (crl.scrollLeft >= crl.scrollWidth-crl.clientWidth) {
        rn.style.setProperty("opacity","0.2");
        rn.style.setProperty("cursor","inherit");
        rn.classList.remove("bhvr");
        return;
    }
    if (crl.scrollLeft == 0) {
        ln.style.setProperty("opacity","0.2");
        ln.style.setProperty("cursor","inherit");
        ln.classList.remove("bhvr");
        return;
    }
    ln.style.setProperty("opacity","1");
    ln.style.setProperty("cursor","pointer");
    ln.classList.add("bhvr");
    rn.style.setProperty("opacity","1");
    rn.style.setProperty("cursor","pointer");
    rn.classList.add("bhvr");
});