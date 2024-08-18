function isPalindrome(str) {
    // Remove all non-alphanumeric characters and convert the string to lowercase
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');

    // Check if the cleaned string is equal to the reversed string
    return cleanedStr === reversedStr;
}

function checkPalindrome() {
    const inputString = document.getElementById('textBox').value;
    const result = isPalindrome(inputString);

    const resultElement = document.getElementById('result');
    const outputText = document.getElementById('outputText');

    resultElement.innerText = result ? "It's a palindrome!" : "It's not a palindrome.";
    outputText.style.display = 'block';
}