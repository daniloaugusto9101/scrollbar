window.addEventListener("scroll", () =>{
    const indicatorBar = document.querySelector(".scroll-bar")

    // pretornar um valor do local onsde esta o toppo do scroll 0 ate fim
    const pageScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrollValue = (pageScroll / height) * 100;

    indicatorBar.style.width = scrollValue + "%";


    // console.log(scrollValue)
});

