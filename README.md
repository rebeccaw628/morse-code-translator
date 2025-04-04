# Morse Code Translator

A project that uses JavaScript and HTML to translate English text into Morse Code and vice versa.


# Logic Plan
## Step 1: Define the Scope and Requirements
Input:
- Users can enter either English text or Morse Code

Processing:
- Convert English to Morse Code
- Convert Morse Code to English

Output:
- Display the translated text

Additional Considerations:
- Proper handling of spaces (one space between Morse characters, three spaces between words).
- Ignore invalid characters or provide an error message
- Unit tests for non-DOM functions

## Step 2: Plan the User Interface (UI)
Layout Elements:
- A text input area for user input
- Live translation as user types
- A display area for the translated output
- A "Clear" button to reset inputs

Design Considerations:
- Keep the UI clean and minimal.
- Use CSS for styling.
- Make it responsive for different screen sizes.

## Step 3: Define Data Structures
- Morse Code Dictionary (JavaScript Object): The key is the English character, and the value is the corresponding Morse Code

## Step 4: Implement Core Logic
1. Convert English to Morse:
- Convert input to upppercase
- Split input into individual characters -> creates array
- Map each character to its Morse equivalent using the dictionary
- Insert ' | ' at every white space to denote spaces in morse code
- Join the Morse characters with spaces
- Display output 