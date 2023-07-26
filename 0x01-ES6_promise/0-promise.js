function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Replace the API call below with your actual API call
    // For example, if you're using fetch:
    // fetch('https://api.example.com/data')
    //   .then(response => response.json())
    //   .then(data => resolve(data))
    //   .catch(error => reject(error));

    // Simulating an API call that resolves after 2 seconds
    setTimeout(() => {
      resolve("API response data");
      // If there's an error, you can reject the Promise like this:
      // reject(new Error("API request failed"));
    }, 2000);
  });
}

// Using the getResponseFromAPI function
getResponseFromAPI()
  .then(response => {
    console.log("API Response:", response);
  })
  .catch(error => {
    console.error("Error fetching data from API:", error);
  });
