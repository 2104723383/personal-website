var intro_count = 0;

var hero_div = document.getElementsByClassName('hero-container')[0];

var info_div = document.getElementsByClassName('info-container')[0];
var info_div_offset = info_div.offsetTop - hero_div.offsetHeight;
var info_count = 0;

var works_div = document.getElementsByClassName('works-container')[0];
var works_div_offset = works_div.offsetTop - hero_div.offsetHeight;
var works_count = 0;

var interests_div = document.getElementsByClassName('interests-outer-container')[0];
var interests_div_offset = interests_div.offsetTop - hero_div.offsetHeight;
var interests_count = 0;

var footer_div = document.getElementsByClassName('footer-container')[0];
var footer_div_offset = footer_div.offsetTop - hero_div.offsetHeight;
var footer_count = 0;

var flag = 0;

window.onscroll = function() {
    if (info_count == 0 && (window.scrollY > info_div_offset)) {
        info_div.style.opacity = 1;
        info_count++;
        flag++;
    }
    if (works_count == 0 && (window.scrollY > works_div_offset)) {
        works_div.style.opacity = 1;
        works_count++;
        flag++;
    }
    if (interests_count == 0 && (window.scrollY > interests_div_offset)) {
        interests_div.style.opacity = 1;
        interests_count++;
        flag++;
    }
    if (footer_count == 0 && (window.scrollY > footer_div_offset)) {
        footer_div.style.opacity = 1;
        footer_count++;
        flag++;
    }
}