function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // Resolve the Promise with a successful response
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      // Reject the Promise with an error message
      reject(new Error('The fake API is not working currently'));
    }
  });
}

// Test the function with `success = true`
getFullResponseFromAPI(true)
  .then(response => {
    console.log("Success Response:", response);
  })
  .catch(error => {
    console.error("Error:", error);
  });

// Test the function with `success = false`
getFullResponseFromAPI(false)
  .then(response => {
    console.log("Success Response:", response);
  })
  .catch(error => {
    console.error("Error:", error);
  });
