// let homeScore = document.getElemenById("home-score")
// let guestScore = document.getElemenById("guest-score")


const homeScoreEl = document.querySelector('.home .score');
const guestScoreEl = document.querySelector('.guest .score');
let homeScore = 0
let guestScore = 0

const homeButtons = document.querySelectorAll(".btn-home");
const guestButtons = document.querySelectorAll(".btn-guest");

homeButtons.forEach(button => {
    button.addEventListener('click', function(){
        const points = Number(button.getAttribute("data-points"));
        homeScore += points;
        homeScoreEl.textContent = homeScore;
    })
})

guestButtons.forEach(button => {
    button.addEventListener('click', function(){
        const points = Number(button.getAttribute("data-points"));
        guestScore += points;
        guestScoreEl.textContent = guestScore;
    })
})