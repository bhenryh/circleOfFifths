let start = true
let currentIndex = 0
const keys = document.querySelectorAll(".pianoKeys");
const sharps = document.querySelectorAll(".sharpScales input");
const flats = document.querySelectorAll(".flatScales input");
const black = document.querySelectorAll(".black");

function startSequence() {
    sharps.forEach((sharp) => sharp.disabled = true);
    flats.forEach((flat) => flat.disabled = true);
    sharps[currentIndex].disabled = false;
    sharps[currentIndex].focus();

    // if (start) {
    //     start = false;
    //     var inputs = document.getElementsByTagName("INPUT");
    //     for (var i = 0; i < inputs.length; i++) {
    //         if (inputs[i].type === 'text') {
    //             inputs[i].disabled = true;
    //         }
    //     }
    //     document.querySelector("#ssd1").disabled = false;
    //     document.querySelector("#ssd1").focus();
    // }
}
startSequence();

// document.querySelector("#one").addEventListener("click", () => {
//     // alert("C")
//     var inputs = document.getElementsByTagName("INPUT");
//     for (var i = 0; i < inputs.length; i++) {
//         if (inputs[i].disabled === false) {
//             inputs[i].value = "C"
//             inputs[i].disabled = true
//             inputs[i].nextSibling.disabled = false;
//         }
//     }
// });

keys.forEach( (key) => key.addEventListener("click", (e) => {
    console.log(e.target.className)
    if (e.target.className === "pianoKeys black") {
        document.getElementById("sharpButton").innerHTML= e.target.dataset.pitch;
        document.getElementById("flatButton").innerHTML= e.target.dataset.alt;
        $("#sharpFlatChoice").modal('show');
        return
    }

    // alert(e.target.dataset.pitch + " " + e.target.dataset.alt)
    sharps[currentIndex].value = e.target.dataset.pitch;
    currentIndex++;
    sharps[currentIndex].disabled = false;
    sharps[currentIndex].focus();
}))

document.getElementById("sharpButton").addEventListener("click", (e) => {
    console.log(e.target.textContent)
    sharps[currentIndex].value = e.target.textContent;
    currentIndex++;
    sharps[currentIndex].disabled = false;
    sharps[currentIndex].focus();
    $("#sharpFlatChoice").modal('hide');
});

document.getElementById("flatButton").addEventListener("click", (e) => {
    console.log(e.target.textContent)
    sharps[currentIndex].value = e.target.textContent;
    currentIndex++;
    sharps[currentIndex].disabled = false;
    sharps[currentIndex].focus();
    $("#sharpFlatChoice").modal('hide');
});



