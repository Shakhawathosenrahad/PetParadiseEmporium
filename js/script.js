const menu = document.querySelector(".menu"),
      nav = document.querySelector("nav"),
      links = document.querySelector(".links"),
      alllinks = links.querySelectorAll("a");



menu.addEventListener("click", () => {    
    if(links.style.right == "0px") {
        links.style.right = "-260px"
        menu.classList.remove("close");
    }
    else {
        links.style.right = "0";
        menu.classList.add("close");
    }
})

alllinks.forEach((item, i) => {
    item.addEventListener("click", () => {
        let active = document.querySelector(".active");
        active.classList.remove("active");
        item.classList.add("active")
    })
})



// carousel

let carousel = document.querySelector(".carousel"),
    arrow = document.querySelectorAll(".carousel-wrapper .arrow")


let isdraging = true, pagex, startscrollLeft;

const draging = e => {
    if(isdraging) return;
    carousel.scrollLeft = startscrollLeft - (e.pageX - pagex);
}

const dragstart = e => {
    isdraging = false;
    pagex = e.pageX;
    startscrollLeft = carousel.scrollLeft;
}

carousel.addEventListener("mousemove", draging);
carousel.addEventListener("mousedown", dragstart);
document.addEventListener("mouseup", () => isdraging = true);


arrow.forEach((item, i) => {
    item.addEventListener("click", () => {
        carousel.classList.add("scrolling");
        if(i === 0) {
            carousel.scrollLeft -= 200;
        }
        else {
            carousel.scrollLeft += 200;
        }
        carousel.classList.remove("scrolling");
    })
})