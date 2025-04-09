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
const btnClear = document.querySelector('.clearBtn')


const translation = (inputField, outputField, translateFn, dictionary) => {
    let currentInputhandler = null;

    return function() {
        //Update DOM to reflect translation direction
        inputField.readOnly = false;
        inputField.focus();
        inputField.value = '';
        
        outputField.readOnly = true;
        outputField.value = 'Translated text will appear here';

        //Remove any previous event listener
        inputField.removeEventListener('input', currentInputhandler)

        currentInputhandler = function (e) {
            if (inputField.value.trim() === '') {
                outputField.value = '';
            }
            else {
                outputField.value = translateFn(inputField.value, dictionary)
            }
        }
        inputField.addEventListener('input', currentInputhandler);
    }
}

const engToMorseHandler = translation(eng, morse, engToMorse, morseMap)
const morseToEngHandler = translation(morse, eng, morseToEng, morseMap)

btn1.addEventListener('click', engToMorseHandler)
btn2.addEventListener('click', morseToEngHandler)

btnClear.addEventListener('click', () => {
    eng.value = '';
    morse.value = '';
    if (eng.readOnly === true) {
        morse.focus();
        eng.value = 'Translated text will appear here';
    } 
    else {
        eng.focus();
        morse.value = 'Translated text will appear here';
    }
});

const btnList = document.querySelectorAll('.focusBtn');
btnList.forEach(btnEl => {
    btnEl.addEventListener('click', () => {
        document.querySelector('.clicked')?.classList.remove('clicked');
        btnEl.classList.add('clicked');
    })
})

engToMorseHandler();


