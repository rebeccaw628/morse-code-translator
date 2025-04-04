import { engToMorse, morseToEng } from "./translator.js";
import { morseMap } from "./dictionary.js";

describe("Test cases for a function that translates English to Morse code", () => {
    test("Returns the correct translation for valid parameters", () => {
        expect(engToMorse('hi my name is', morseMap)).toBe('.... .. / -- -.-- / -. .- -- . / .. ...');
        expect(engToMorse('TRANSLATE THIS', morseMap)).toBe('- .-. .- -. ... .-.. .- - . / - .... .. ...');
        expect(engToMorse('thIs is A TEST', morseMap)).toBe('- .... .. ... / .. ... / .- / - . ... -');
        expect(engToMorse('526 258', morseMap)).toBe('..... ..--- -.... / ..--- ..... ---..');
        expect(engToMorse('.', morseMap)).toBe('.-.-.-');
        expect(engToMorse('@', morseMap)).toBe('.--.-.');
    });
    test("Removes trailing white spaces", () => {
        expect(engToMorse('    hello there   ', morseMap)).toBe('.... . .-.. .-.. --- / - .... . .-. .');
        expect(engToMorse('    xyz                 a   ', morseMap)).toBe('-..- -.-- --.. / .-');
    });
    test("Removes extra white spaces between words", () => {
        expect(engToMorse('hello   there', morseMap)).toBe('.... . .-.. .-.. --- / - .... . .-. .');
        expect(engToMorse('a b  c', morseMap)).toBe('.- / -... / -.-.');
        expect(engToMorse('a b   c', morseMap)).toBe('.- / -... / -.-.');
    });
    test("Returns the correct output for invalid parameters", () => {
        expect(engToMorse('}}{}*', morseMap)).toBe("� � � � �")
    });
});

describe("Test cases for a function that translates Morse code to English", () => {
    test("Returns the correct translation for valid parameters", () => {
        expect(morseToEng('.... .. / - .... . .-. .', morseMap)).toBe('hi there');
        expect(morseToEng('.- -... -.-.', morseMap)).toBe('abc');
        expect(morseToEng('--.. / ----- / ..--- ..---', morseMap)).toBe('z 0 22');
        expect(morseToEng('.-- --- .-- -.-.--', morseMap)).toBe('wow!');
    });
    test("Removes trailing white spaces", () => {
        expect(morseToEng('    -.-. .-.. . .- -. / - .... .. ...  ', morseMap)).toBe('clean this');
    });
    test("Removes extra white spaces between morse words", () => {
        expect(morseToEng('.-  /     -...', morseMap)).toBe('a b');
        expect(morseToEng('    - . ... - .. -. --.     / .---- --..-- ..---', morseMap)).toBe('testing 1,2');
    });
    test("Returns the correct output for invalid parameters", () => {
        expect(morseToEng('_ _ :!! / : :', morseMap)).toBe("��� ��")
        expect(morseToEng('abc', morseMap)).toBe("�")
        expect(morseToEng('0, 1, 2', morseMap)).toBe("���")
    });
});
