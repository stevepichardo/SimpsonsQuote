const paragraph = document.getElementById('quoteSaying');
const authorParagraph = document.getElementById('quoteAuthor');
const getQuoteBtn = document.getElementById('getNew');
const characterImage = document.getElementById('characterImg');

function getQuote() {
  axios
    .get('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(function(response) {
      const { quote, character, image } = response.data[0];

      paragraph.innerHTML = quote;
      authorParagraph.innerHTML = `- ${character}`;
      characterImage.src = image;
    })
    .catch(function(error) {
      console.log(error);
    });
}

// On Document Load Generate Quote
window.onload = getQuote;

// On Click Generate new Quote

getQuoteBtn.addEventListener('click', getQuote);
