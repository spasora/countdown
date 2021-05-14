const days = document.querySelector(".days");

const launchDate = new Date("10/4/2021");
const today = new Date();
const oneDay = 1000 * 60 * 60 * 24;
const daysLeft = Math.ceil((launchDate.getTime() - today.getTime()) / oneDay);

days.textContent = daysLeft;
