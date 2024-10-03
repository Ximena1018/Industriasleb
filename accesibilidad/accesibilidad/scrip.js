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
});

// Activar Lector
let isReaderActive = false;
document.querySelector('[data-action="activate-reader"]').addEventListener('click', function() {
    if (!isReaderActive) {
        const text = document.getElementById('test-text').innerText;
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = 'es-ES';
        // Busca una voz más natural
        const voices = speechSynthesis.getVoices();
        const naturalVoice = voices.find(voice => voice.name.includes('Google')) || voices.find(voice => voice.name.includes('male')) || voices[0];
        speech.voice = naturalVoice;
        window.speechSynthesis.speak(speech);
        isReaderActive = true;
    } else {
        window.speechSynthesis.cancel();
        isReaderActive = false;
    }
});
