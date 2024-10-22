// is a section in view of my user?
// i got instructions on how to do this from the mozilla website

const options = {
    root: document.querySelector("#scrollArea"),
    rootMargin: "0px",
    threshold: 0.8,
};

sections.forEach(section => {
    observer.observe(section);
});

function callback(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            entry.target.classList.add("fade-in");
            entry.target.classList.add("show");
            entry.style.display = "block";
        } else {

            entry.target.classList.remove("fade-in");
            entry.target.classList.remove("show");
            entry.style.display = "none";
        }
    });
}

const observer = new IntersectionObserver(callback, options);
const sections = document.querySelectorAll("section");


// for the buttons, hover or click to see project details

document.getElementById("op1").addEventListener('mouseover', showOne);
document.getElementById("op1").addEventListener('click', clickOne);
document.getElementById("op1").addEventListener('mouseout', offOne);

document.getElementById("op2").addEventListener('mouseover', showTwo);
document.getElementById("op2").addEventListener('click', clickTwo);
document.getElementById("op2").addEventListener('mouseout', offTwo);

let click01 = false;
let click02 = false;


function showOne() {

    if (click02) {
        return;
    }

    const projImage = document.getElementById("groupImage");
    const projPar = document.getElementById("groupPar")
    projImage.style.display = "block";
    projPar.style.display = "block";
}

function showTwo() {

    if (click01) {
        return;
    }

    const projImage = document.getElementById("selfImage");
    const projPar = document.getElementById("selfPar")
    projImage.style.display = "block";
    projPar.style.display = "block";

}

function clickOne() {

    click02 = false;
    offTwo();
    click01 = true;
    showOne();
}

function clickTwo() {

    click01 = false;
    offOne();
    click02 = true;
    showTwo();
}

function offOne() {

    if (!click01) {
        const projImage = document.getElementById("groupImage");
        const projPar = document.getElementById("groupPar");
        projImage.style.display = "none";
        projPar.style.display = "none";
    }
}

function offTwo() {

    if (!click02) {
        const projImage = document.getElementById("selfImage");
        const projPar = document.getElementById("selfPar")
        projImage.style.display = "none";
        projPar.style.display = "none";
    }
}


// explode me now!
document.getElementById("hateIt").addEventListener('click', function () {

    const replace = document.getElementById("audrey");
    replace.src = "images/explode.gif";
    setTimeout(function () {
        document.getElementById("hateIt").textContent = "i hope you're happy.";
    }, 3000)
})


// fade ins
document.getElementById("email").addEventListener("click", contactFade);

function contactFade() {

    const eAddress = document.getElementById("eAddress");
    const airplane = document.getElementById("airplane");
    const warning = document.getElementById("warning");
    const recieved = document.getElementById("recieved");

    airplane.classList.add("show");
    eAddress.classList.add("show");
    airplane.style.display = "block";
    eAddress.style.display = "block";

    setTimeout(function () {
        warning.classList.add("show");
        warning.style.display("block");
        recieved.classList.add("show");
        recieved.style.display("block");
    }, 2000)
}