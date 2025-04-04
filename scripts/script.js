import {
    engToMorse,
    morseToEng
} from './translator.js'

import {
    morseMap
} from './dictionary.js'

const eng = document.querySelector('#eng-txt')
const morse = document.querySelector('#morse-txt')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')


btn1.addEventListener('click', () => {
    eng.readOnly = false;
    eng.focus();
    eng.value = '';
    morse.readOnly = true;
    morse.value = 'Translated text will appear here'
});



eng.addEventListener('input', (e) => {
        const translated = engToMorse(e.target.value, morseMap)
        morse.value = translated; 
    });

btn2.addEventListener('click', () => {
    morse.readOnly = false;
    morse.focus();
    morse.value = '';
    eng.readOnly = true;
    eng.value = 'Translated text will appear here'
});



morse.addEventListener('input', (e) => {
        const translated = morseToEng(e.target.value, morseMap)
        eng.value = translated; 
    });

