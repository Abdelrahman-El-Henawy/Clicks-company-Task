const dropdown_1 = document.getElementById("dropdown-1");
const followDropdown_1 = document.getElementById("followDropdown-1");
const dropdown_2 = document.getElementById("dropdown-2");
const followDropdown_2 = document.getElementById("followDropdown-2");
const indicators = document.querySelectorAll(".indicators span");
let lastScrollTop = 0;

dropdown_1.addEventListener("mouseenter", function () {
  followDropdown_1.classList.toggle("active");
});
followDropdown_1.addEventListener("mouseleave", function () {
  followDropdown_1.classList.toggle("active");
});
dropdown_2.addEventListener("mouseenter", function () {
  followDropdown_2.classList.toggle("active");
});
followDropdown_2.addEventListener("mouseleave", function () {
  followDropdown_2.classList.toggle("active");
});


const wrapperChangeable = document.querySelectorAll(
  ".big-wrapper .news-wrapper"
);

indicators.forEach((span) => {
  span.addEventListener("click", () => {
    wrapperChangeable.forEach((div) => {
      if (div.id == span.getAttribute("data-bullet")) {
        indicators.forEach((span) => {
          span.classList.remove("active");
        });
        span.classList.add("active");
        div.classList.add("show");
        div.classList.remove("hidden");
        div.classList.remove("videos-1");
      } else {
        div.classList.remove("show");
        div.classList.add("hidden");
        div.classList.add("videos-1");
      }
    });
  });
});
const sliderContainers = [...document.querySelectorAll('.slider-container')];
const nxtBtn = [...document.querySelectorAll('#next-btn')];
const preBtn = [...document.querySelectorAll('#pre-btn')];
console.log(nxtBtn);
sliderContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

$(".open").click(function () {
  $(".nav-aside").fadeIn(500);
  $(".screen-overlay").fadeIn(500);
  $(".nav-aside").animate({ right: "0px", opacity: 1 }, 500);
});
$(".close").click(function () {
  $(".screen-overlay").fadeOut(500);
  $(".nav-aside").animate({ right: "-260px", opacity: 0 }, 500);
});
$("#aside-dropdown-1").click(function () {
  $(".drop-1").toggleClass("active");
});
$("#aside-dropdown-2").click(function () {
  $(".drop-2").toggleClass("active");
});

window.addEventListener("scroll",function(){
  if(window.scrollY >= this.document.documentElement.clientHeight){
    $(".wrapper-2").addClass("wrapper-2-fixed")
    $(".search div:first-child span.open").addClass("fixed-menu")
  }
  else{
    $(".wrapper-2").removeClass("wrapper-2-fixed")
    $(".search div:first-child span.open").removeClass("fixed-menu")
  }
})
window.addEventListener("scroll",function(){
  if(this.document.querySelector(".wrapper-2").classList.contains("wrapper-2-fixed")){
    const wrapperFixed = document.querySelector(".wrapper-2-fixed")
    let scrollTop = this.window.scrollY 
    if(scrollTop > lastScrollTop){
      wrapperFixed.style.top = "-88px"
    }
    else{
      wrapperFixed.style.top = "0"
    }
    lastScrollTop = scrollTop
  }
})

window.addEventListener("scroll",function(){
  if(window.scrollY >= (document.documentElement.scrollHeight - document.documentElement.clientHeight - 755)){
    $(".get-to-top").removeClass("fixed-backToTop-btn")
  }
  else{
    $(".get-to-top").addClass("fixed-backToTop-btn")
  }
})
document.querySelector(".get-to-top").addEventListener("click",function(){
  window.scrollTo({
    behavior:"smooth",
    top: "0px"
  })
})