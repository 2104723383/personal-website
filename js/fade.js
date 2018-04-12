var intro_count = 0;

var hero_div = document.getElementsByClassName("hero-container")[0];

var info_div = document.getElementsByClassName("info-container")[0];
var info_div_offset = info_div.offsetTop - hero_div.offsetHeight;
var info_count = 0;

var works_div = document.getElementsByClassName("works-container")[0];
var works_div_offset = works_div.offsetTop - hero_div.offsetHeight;
var works_count = 0;

var interests_div = document.getElementsByClassName("interests-outer-container")[0];
var interests_div_offset = interests_div.offsetTop - hero_div.offsetHeight;
var interests_count = 0;

var footer_div = document.getElementsByClassName("footer-container")[0];
var footer_div_offset = footer_div.offsetTop - hero_div.offsetHeight;
var footer_count = 0;

window.onscroll = function () {
    if (info_count == 0 && (window.scrollY > info_div_offset)) {
        info_div.style.opacity = 1;
        info_count++;
    }
    if (works_count == 0 && (window.scrollY > works_div_offset)) {
        works_div.style.opacity = 1;
        works_count++;
    }
    if (interests_count == 0 && (window.scrollY > interests_div_offset)) {
        interests_div.style.opacity = 1;
        interests_count++;
    }
    if (footer_count == 0 && (window.scrollY > footer_div_offset)) {
        footer_div.style.opacity = 1;
        footer_count++;
    }
    // if (feature_count == 1 && (window.scrollY > feature_item_offset)) {
    //     for (var i = 0; i < feature_item.length; ++i) {
    //         feature_item[i].style.transitionDelay = "0.5s";
    //         feature_item[i].style.opacity = 1;
    //     }
    //     feature_count++;
    // }
    // if (works_count == 0 && (window.scrollY > works_intro_offset)) {
    //     introductions[intro_count++].style.opacity = 1;
    //     works_count++;
    // }
    // if (works_count == 1 && (window.scrollY > works_item_offset)) {
    //     var works_delay = 0;
    //     for (var i = 0; i < works_item.length; ++i, works_delay += 0.3) {
    //         works_item[i].style.transitionDelay = works_delay + "s";
    //         works_item[i].style.opacity = 1;
    //     }
    //     works_count++;
    // }
    // if (member_count == 0 && (window.scrollY > member_intro_offset)) {
    //     introductions[intro_count++].style.opacity = 1;
    //     member_count++;
    // }
    // if (member_count == 1 && (window.scrollY > member_item_offset)) {
    //     var member_delay = 0;
    //     // introductions[intro_count++].style.opacity = 1;
    //     for (var i = 0; i < member_item.length; ++i, member_delay += 0.3) {
    //         member_item[i].style.transitionDelay = member_delay + "s";
    //         member_item[i].style.opacity = 1;
    //     }
    //     member_count++;
    // }
    // // if (partners_count == 0 && (window.scrollY > partners_intro_offset)) {
    // //     introductions[intro_count++].style.opacity = 1;
    // //     partners_count++;
    // // }
    // // if (partners_count == 1 && (window.scrollY > partners_item_offset)) {
    // //     var partners_delay = 0;
    // //     for (var i = 0; i < partners_item.length; ++i, partners_delay += 0.3) {
    // //         partners_item[i].style.transitionDelay = partners_delay + "s";
    // //         partners_item[i].style.opacity = 1;
    // //     }
    // //     partners_count++;
    // // }
    // if (c2a_count == 0 && (window.scrollY > c2a_intro_offset)) {
    //     introductions[intro_count++].style.opacity = 1;
    //     c2a_count++;
    // }
    // if (c2a_count == 1 && (window.scrollY > c2a_item_offset)) {
    //     var c2a_delay = 0;
    //     for (var i = 0; i < c2a_item.length; ++i, c2a_delay += 0.3) {
    //         c2a_item[i].style.transitionDelay = c2a_delay + "s";
    //         c2a_item[i].style.opacity = 1;
    //     }
    //     c2a_count++;
    //     c2a_btn.style.transform = "scale(1.2)";
    //     var myVar = setTimeout(shrink, 800);
    //     function shrink() {
    //         c2a_btn.style.transform = "scale(1)";
    //     }
    // }
}