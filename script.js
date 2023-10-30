(function () {
    const seconds = 1000,
            minutes = seconds * 60,
            hours = minutes * 60,
            day = hours * 24;

        let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm =  String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        monthDay = "05/10/",
        birthDay = monthDay + yyyy;
        today = mm + "/" + dd + "/" + yyyy;
        if(today > birthDay){
            birthDay = monthDay + nextYear;
        }

        const countDown = new Date(birthDay).getTime(),

        x = setInterval(function(){
            const now = new Date().getTime(),
            distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance/(day)),
            document.getElementById("hours").innerText = Math.floor((distance%(day))/(hours)),
            document.getElementById("minutes").innerText =  Math.floor((distance%(hours))/(minutes)),
            document.getElementById("seconds").innerText = Math.floor((distance%(minutes))/(seconds));

            if(distance < 0){
                document.getElementById("headline").innerText = "It's Darshan's birthday 🎂"
                document.getElementById("countDown").style.display = 'none';
                document.getElementById("content").style.display = 'block';
                clearInterval(x);
            }

        }, 0)
}());