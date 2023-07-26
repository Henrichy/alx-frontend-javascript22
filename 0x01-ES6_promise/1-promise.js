function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success'
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
// Example usage with async/await
async function exampleUsage() {
  try {
    const response = await getFullResponseFromAPI(true);
    console.log('API Response:', response);
    // Handle the response data here
  } catch (error) {
    console.error('API Error:', error.message);
    // Handle the error here
  }
}

// Call the example usage function
exampleUsage();
