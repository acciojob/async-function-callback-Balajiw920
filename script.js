// define the API URL
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// define the async function that fetches data from the API and calls the callback function with the result
async function fetchData(callback) {
  // fetch data from the API using the fetch() method and await the response
  const response = await fetch(apiUrl);

  // parse the response body as JSON and get the title property
  const data = await response.json();
  const title = data.title;

  // call the callback function with the title
  callback(title);
}

// define the callback function that displays the title in the output div
function displayTitle(title) {
  const outputDiv = document.getElementById('output');
  outputDiv.innerText = title;
}

// add an event listener to the btn button that fetches data from the API and displays the title in the output div when clicked
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  fetchData(displayTitle);
});
