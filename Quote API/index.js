let API_URL = "http://api.quotable.io/random";
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const btn = document.getElementById('btn');

const getQuote = function () {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        quote.innerHTML = `"${data.content}"`;
        author.innerHTML = data.author;
    })
}
