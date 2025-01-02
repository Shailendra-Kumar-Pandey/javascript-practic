const endDate = "1 Jan 2025 12:00 AM";

document.querySelector("#end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
    if(diff < 0) return;
  inputs[0].value = Math.floor(diff / 3600 / 24); // convert into days
  inputs[1].value = Math.floor((diff / 3600) % 24); // convert into hours
  inputs[2].value = Math.floor((diff / 60) % 60); // convert into Minutes
  inputs[3].value = Math.floor((diff)%60);  // convert into Secondes
}

// intial Call

clock();

/**
 * 1day = 24 hours
 * 1Hours = 60 Minutes
 * 60 Minutes = 3600 Seconds
 * */

setInterval(
    ()=>{
        clock()
    },1000
)
