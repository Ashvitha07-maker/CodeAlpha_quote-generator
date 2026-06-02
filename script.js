// Quote database - you can add more quotes here
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "Code is like humor. When you have to explain it, it's bad.",
        author: "Cory House"
    },
    {
        text: "Simplicity is the soul of efficiency.",
        author: "Austin Freeman"
    },
    {
        text: "Make it work, make it right, make it fast.",
        author: "Kent Beck"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    }
];

// Function to get a random quote
function getRandomQuote() {
    // Math.random() gives a number between 0 and 0.999...
    // Multiply by quotes.length (10) gives 0 to 9.999...
    // Math.floor() removes decimals, giving 0 to 9
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Return the quote at that random index
    return quotes[randomIndex];
}

// Function to display a quote on the page
function displayRandomQuote() {
    // Get a random quote from our database
    const quote = getRandomQuote();
    
    // Find the HTML elements by their IDs
    const quoteTextElement = document.getElementById("quoteText");
    const quoteAuthorElement = document.getElementById("quoteAuthor");
    
    // Update the HTML with the new quote
    quoteTextElement.textContent = `"${quote.text}"`;
    quoteAuthorElement.textContent = `- ${quote.author}`;
}

// Get the button element
const newQuoteButton = document.getElementById("newQuoteBtn");

// Add event listener - this makes the button work when clicked
newQuoteButton.addEventListener("click", displayRandomQuote);

// Show a random quote immediately when the page loads
displayRandomQuote();