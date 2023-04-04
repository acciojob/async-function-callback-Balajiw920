//const url = "https://jsonplaceholder.typicode.com/posts/1";

// define the API URL
const url = 'https://jsonplaceholder.typicode.com/todos/1';

// define the async function
async function fetchData(callback) {
  try {
    // fetch data from the API
    const response = await fetch(apiUrl);
    const data = await response.json();

    // call the callback function with the data
    callback(data);
  } catch (error) {
    console.error(error);
  }
}

// add event listener to the button
document.querySelector('#btn').addEventListener('click', async () => {
  // call the fetchData function and display the title in the output div
  fetchData(data => {
    const outputDiv = document.querySelector('#output');
    outputDiv.textContent = data.title;
  });
});


//your JS code here. If required.
