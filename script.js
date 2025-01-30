document.addEventListener("DOMContentLoaded", function () {
    let noCount = 0;
    let yesButton = document.getElementById("btn_yes");
    let noButton = document.getElementById("btn_no");
    let image = document.getElementById("prettypleaseimage");

    yesButton.disabled = true;
    yesButton.style.opacity = "0.5"; 

    noButton.addEventListener("click", function () {
        noCount++;

        if (noCount === 1) {
            alert("Ganyan ka pala boss");
            image.src = "1stpic.gif"; 
        } else if (noCount === 2) {
            alert("Sakit mo naman boss");
            image.src = "sideeye.gif"; 
        } else if (noCount === 3) {
            alert("Hindi mo na ako love no?");
            image.outerHTML = `<video id="prettypleaseimage" width="250" autoplay>
                                  <source src="nakakasamangloob.mp4" type="video/mp4">
                               </video>`;
            yesButton.disabled = false;
            yesButton.style.opacity = "1";
            
            noButton.disabled = true;
            noButton.style.opacity = "0.5"; 
            noButton.style.cursor = "not-allowed";
            return; 
        }

        let maxWidth = window.innerWidth - noButton.offsetWidth;
        let maxHeight = window.innerHeight - noButton.offsetHeight;
        let randomX = Math.floor(Math.random() * maxWidth);
        let randomY = Math.floor(Math.random() * maxHeight);

        noButton.style.position = "absolute";
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";
    });

    yesButton.addEventListener("click", function () {
        window.location.href = "yes.html";
    });
});
