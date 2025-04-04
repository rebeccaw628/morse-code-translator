import {
    morseMap,
}
from './dictionary.js'

export const engToMorse = (text, dictionary) => {
    return text.toUpperCase().trim()
        .replace(/\s{2,}/g,' ')
        .split('')
        .map(char => {
            if (Object.keys(dictionary).includes(char)) {
                return dictionary[char];
            } 
            return char === ' ' ? '/' : "�";
        })
        .join(' ')
};
console.log(engToMorse('a b   c', morseMap));

export const morseToEng = (text, dictionary) => {
    return text.trim()
                .replace(/\s*\/\s*/g,' / ') // preserves ' / ' as word seperator
                .replace(/\s{2,}/g,' ') // removes extra spacing between morse characters
                .split(' ')
                .map(char => {
                    for (let key in dictionary) {
                        if (dictionary[key] === char) {
                            return key;
                        }
                    }
                    return char === '/' ? ' ' : "�";
                })
                .join('')
                .toLowerCase();
};

console.log(morseToEng('.-    / -...', morseMap))






