const paragraph = document.querySelector('#quoteSaying');
const authorParagraph = document.querySelector('#quoteAuthor');
const getQuoteBtn = document.querySelector('#getNew');

function getQuote() {
  axios
    .get('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(function(response) {
      const { quote, character, img } = response.data[0];

      paragraph.innerHTML = quote;
      authorParagraph.innerHTML = `- ${character}`;
      console.log(quote);
    })
    .catch(function(error) {
      console.log(error);
    });
}

// On Document Load Generate Quote
window.onload = getQuote;

// On Click Generate new Quote

getQuoteBtn.addEventListener('click', getQuote);
