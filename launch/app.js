document.addEventListener("DOMContentLoaded", () => {
    const daysElement = document.querySelector(".box:nth-child(1) .cards h2");
    const hoursElement = document.querySelector(".box:nth-child(2) .cards h2");
    const minutesElement = document.querySelector(".box:nth-child(3) .cards h2");
    const secondsElement = document.querySelector(".box:nth-child(4) .cards h2");

    // Set the launch date and time (YYYY-MM-DDTHH:MM:SS format)
    const launchDate = new Date("2024-06-20T00:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeDifference = launchDate - now;

        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            daysElement.textContent = days < 10 ? "0" + days : days;
            hoursElement.textContent = hours < 10 ? "0" + hours : hours;
            minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes;
            secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;
        } else {
            daysElement.textContent = "00";
            hoursElement.textContent = "00";
            minutesElement.textContent = "00";
            secondsElement.textContent = "00";
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to display the timer immediately
});
