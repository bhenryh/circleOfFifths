let start = true
let currentIndex = 0
const keys = document.querySelectorAll(".pianoKeys");
const sharps = document.querySelectorAll(".sharpScales input");
const flats = document.querySelectorAll(".flatScales input");

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
    // alert(e.target.dataset.pitch + " " + e.target.dataset.alt)
    sharps[currentIndex].value = e.target.dataset.pitch;
    currentIndex++;
    sharps[currentIndex].disabled = false;
    sharps[currentIndex].focus();
}))




