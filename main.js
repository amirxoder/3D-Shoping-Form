const container = document.getElementById("container");
const card = document.getElementById("card");
const title = document.getElementById("title");
const desc = document.getElementById("desc");
const buttons = document.querySelector("#sizes");
const img = document.getElementById("img")
const btn = document.getElementById("btn")





container.addEventListener("mousemove", (e) => {
    xAxis = (window.innerWidth / 2 - e.pageX) / 35;
    yAxis = (window.innerHeight / 2 - e.pageY) / 35;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

});

container.addEventListener("mouseenter", (e) => {
    card.classList.remove("transition");
    title.style.transform = "translateZ(120px)";
    desc.style.transform = `translateZ(100px)`
    title.style.textShadow = `0 0 20px rgba(0,0,0,.2)`;
    buttons.style.transform = `translateZ(180px)`;
    img.style.transform = `translateZ(100px)  rotate(-20deg)`
    btn.style.transform = `translateZ(120px)`;
    btn.style.boxShadow = `0 0 20px rgba(0,0,0,0.3)`
    title.style.textShadow = `0 0 20px rgba(0,0,0,0.3)`
    desc.style.textShadow = `0 0 20px rgba(0,0,0,0.3)`


})

container.addEventListener("mouseleave", (e) => {
    card.style.transform = "rotateX(0) rotateY(0)";
    card.classList.add("transition")
    title.style.transform = "translateZ(0px)"
    title.style.textShadow = `none`
    desc.style.transform = `translateZ(0px)`
    buttons.style.transform = `translateY(0px)`
    img.style.transform = `translateZ(0px)  rotateZ(0deg)`
    btn.style.transform = `translateZ(0px)`;
    btn.style.boxShadow = `none`;
    title.style.textShadow = `none`;
    desc.style.textShadow = `none`;

})