//const url: string = `https://api.kanye.rest/`;
const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';
const quote = document.querySelector('.quote');
const handleDisplay = (response) => {
    // Show the response on the page
    quote.innerHTML = response.quote;
};
const handleGetJson = (response) => {
    return response.json();
};
const handleClick = () => {
    // I need to get some data in here
    fetch(url).then(handleGetJson).then(handleDisplay);
};
