document.onreadystatechange = function() {
  if (document.readyState === 'interactive') {
    const paragraph = document.getElementById('quoteSaying');
    const authorParagraph = document.getElementById('quoteAuthor');
    const quoteImgContainer = document.querySelector('.quote-img');
    const loadingContainer = document.querySelector('.loading');
    const getQuoteBtn = document.getElementById('getNew');
    const characterImage = document.getElementById('characterImg');

    quoteImgContainer.className.includes('hidden') ? getQuote() : displayData();

    function getQuote() {
      quoteImgContainer.classList.add('hidden');
      loadingContainer.classList.remove('hidden');

      axios
        .get('https://thesimpsonsquoteapi.glitch.me/quotes')
        .then(function(response) {
          let { quote, character, image } = response.data[0];
          displayData(quote, character, image);
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    function displayData(quote, character, image) {
      loadingContainer.classList.add('hidden');
      quoteImgContainer.classList.remove('hidden');

      paragraph.innerHTML = `"${quote}"`;
      authorParagraph.innerHTML = `- ${character}`;
      characterImage.src = image;
    }

    // On Click Generate new Quote
    getQuoteBtn.addEventListener('click', getQuote);

    // On click tweet
  }
};
