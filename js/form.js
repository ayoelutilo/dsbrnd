console.log("js works")

//Get the form
var modal = document.getElementsByClassName("form")[0];

// Get the element that closes the modal
var closeBtn = document.getElementsByClassName('close')[0];

// Open Modal
function open() {

    modal.style.display = "flex"

}

setTimeout(open, 1000)
    // Close Modal

function test() {
    console.log("clicked");
    modal.style.display = "none";
}
closeBtn.addEventListener("click", test)

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}