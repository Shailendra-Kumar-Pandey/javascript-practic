const inter = setInterval(clock, 1000);

function clock() {
        const monthName = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        const dayName = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];

        const today = new Date();
        document.querySelector(".full-date").innerHTML =dayName[today.getDay()] + " " + today.getDate() + " " + monthName[today.getMonth()] + " " + today.getFullYear();

        let hour = today.getHours();
        let minute = today.getMinutes();
        let second = today.getSeconds();

        let day = hour >= 12 ? "PM" : "AM";
        if(hour >12){
            hour -= 12;
        }

        hour = (hour < 10) ? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;

        document.querySelector(".hour").innerHTML = hour;
        document.querySelector(".minute").innerHTML = minute;
        document.querySelector(".second").innerHTML = second;
        document.querySelector(".period").innerHTML = day;
}
