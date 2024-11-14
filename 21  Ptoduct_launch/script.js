
const daynum = document.querySelector(".days-num")
const hoursnum = document.querySelector(".hours-num")
const minnum = document.querySelector(".min-num")
const secnum = document.querySelector(".sec-num")

setInterval(() => {
    const launchDate = new Date('nov 18-2024 10:00:00').getTime();
    const currentTime = new Date().getTime();
    let timeGap = launchDate - currentTime

    const countDown = [{
        getDays : Math.floor(timeGap/(1000*60*60*24)),
        getHours : Math.floor((timeGap%(1000*60*60*24))/(1000*60*60)),
        getMin : Math.floor((timeGap % (1000*60*60))/(1000*60)),
        getSec :Math.floor((timeGap % (1000*60))/(1000))
    }]

    countDown.map(({getDays,getHours,getMin,getSec}) => {
        daynum.textContent = getDays;
        hoursnum.textContent = getHours;
        minnum.textContent = getSec;
    })
});
