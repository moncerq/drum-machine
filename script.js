let buttons = document.querySelectorAll('.drum-pad');

function playAudio(event) {
    let audioElement = event.target.getElementsByTagName('audio')[0];
    let display = document.getElementById('display');
    let audioId = audioElement.getAttribute('id');
    let divVolume = document.querySelector('.volume-slider').getElementsByTagName('input')[0];

    if (audioElement) {
        let audio = new Audio(audioElement.src);
        let volume = +divVolume.value;
        audio.volume = volume;
        audio.play();
        display.textContent = audioId;
    }
}

function activeButton() {
    buttons.forEach(elem => {
        elem.addEventListener('mousedown', () => {
            elem.classList.add('toggleClass');
            elem.classList.remove('inactiveClass');
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
            elem.classList.remove('toggleClass');
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