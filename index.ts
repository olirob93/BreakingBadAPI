//const url: string = `https://api.kanye.rest/`;
const url: string = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
const quote: any = document.querySelector('.quote');
const author: any = document.querySelector('.author')

const handleDisplay = (response: BBResponse) => {
    // Show the response on the page
    author.innerHTML = response[0].author
    quote.innerHTML = response[0].quote

}

const handleGetJson = (response: Response): Promise<BBResponse> => {
    return response.json();
}

const handleClick = (): void => {
    // I need to get some data in here
    fetch(url).then(handleGetJson).then(handleDisplay);
}

interface BBResponse {
    quote: string
}