const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
  { text: "If you are working on something exciting, it will keep you motivated.", author: "Unknown" },
  { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { text: "Your limitation—it's only your imagination.", author: "Unknown" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" }
];

const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const tweetBtn = document.getElementById("tweet-quote");
const quoteBox = document.querySelector(".quote-box");
const body = document.body;


const bgColors = ["#ff9a9e","#a18cd1","#fbc2eb","#fad0c4","#ffecd2","#fcb69f","#ffdde1","#d4fc79","#96e6a1","#00c6ff"];

function generateQuote() {
  quoteBox.classList.add("fade"); 

  setTimeout(() => {
   
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `— ${quote.author}`;

    
    const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    body.style.background = randomColor;

    quoteBox.classList.remove("fade"); 
  }, 300);
}

function tweetQuote() {
  const text = `${quoteText.textContent} ${quoteAuthor.textContent}`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

newQuoteBtn.addEventListener("click", generateQuote);
tweetBtn.addEventListener("click", tweetQuote);
