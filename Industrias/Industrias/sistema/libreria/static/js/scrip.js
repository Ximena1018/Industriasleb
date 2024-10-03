// Toggle del menú de accesibilidad
document.getElementById('accessibilityIcon').addEventListener('click', function() {
    var menu = document.getElementById('accessibilityMenu');
    menu.classList.toggle('active');
});

// Control de tamaño de texto
let textSize = 0; // 0: normal, -1: pequeño, 1: grande, 2: muy grande

document.querySelector('[data-action="increase-text"]').addEventListener('click', function() {
    if (textSize < 2) {
        textSize++;
        updateTextSize();
    }
});

document.querySelector('[data-action="decrease-text"]').addEventListener('click', function() {
    if (textSize > -1) {
        textSize--;
        updateTextSize();
    }
});

function updateTextSize() {
    document.body.classList.remove('normal-text', 'small-text', 'large-text', 'extra-large-text');
    if (textSize === 0) {
        document.body.classList.add('normal-text');
    } else if (textSize === -1) {
        document.body.classList.add('small-text');
    } else if (textSize === 1) {
        document.body.classList.add('large-text');
    } else if (textSize === 2) {
        document.body.classList.add('extra-large-text');
    }
}

// Contraste Alto
document.querySelector('[data-action="high-contrast"]').addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
    document.querySelector('.container-formulario').classList.toggle('high-contrast');
    document.querySelector('.container').classList.toggle('high-contrast');
    document.querySelector('.formulario').classList.toggle('high-contrast');
});

// Activar Lector
let isReaderActive = false;
document.querySelector('[data-action="activate-reader"]').addEventListener('click', function() {
    if (!isReaderActive) {
        const text = document.getElementById('header', 'header1').innerText;
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = 'es-ES-es-Es';
        // Busca una voz más natural
        const voices = speechSynthesis.getVoices();
        const spanishVoice = voices.find(voice => voice.lang.startsWith('es')) || voices[0];
        speech.voice = spanishVoice;

        window.speechSynthesis.speak(speech);
        isReaderActive = true;
    } else {
        window.speechSynthesis.cancel();
        isReaderActive = false;
    }
});
