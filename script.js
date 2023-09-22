let buttons = document.querySelectorAll('.drum-pad');

function playAudio(event) {
    let audioElement = event.target.getElementsByTagName('audio')[0];
    if (audioElement) {
        let audio = new Audio(audioElement.src);
        audio.play();
    }
}

function activeButton() {
    buttons.forEach(elem => {
        elem.addEventListener('mousedown', () => {
            elem.classList.add('toggleClass');
            console.log(elem);
        })
    
        elem.addEventListener('mouseup', () => {
            elem.classList.remove('toggleClass');
        })
    
        elem.addEventListener('click', playAudio);
    })
}


function inactiveButton() {
    buttons.forEach(elem => {
        elem.addEventListener('mousedown', () => {
            elem.classList.add('inactiveClass');
        })
    
        elem.addEventListener('mouseup', () => {
            elem.classList.remove('inactiveClass');
        })

        elem.removeEventListener('click', playAudio);
    })
}


function togglePowerFunc() {
    let togglePower = document.querySelector('.toggle-power');

    togglePower.onclick = function(event) {
        if (event.target) {
            event.target.classList.toggle("togglePowerRight");
            if (event.target.classList.contains("togglePowerRight")) {
                activeButton();
            } else {
                inactiveButton();
            }
        }
    }
}
togglePowerFunc();