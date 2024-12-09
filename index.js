// Detecting Button Press, Click, or Touch
document.querySelectorAll(".drum").forEach(drum => {
    drum.addEventListener("click", function() {
        let buttonInnerHTML = this.innerHTML.charAt(0);
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

    drum.addEventListener("touchstart", function(e) {
        e.preventDefault(); // Prevent default touch behavior
        let buttonInnerHTML = this.innerHTML.charAt(0);
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
});

// Detecting Keyboard Press
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "l":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        default:
            console.log(key);
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    if (activeButton) {  // Add check to prevent null error
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
