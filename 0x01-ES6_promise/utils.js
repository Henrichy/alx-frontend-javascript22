// utils.js

// Simulated function to upload a photo to the API
function uploadPhoto(photoData) {
  return new Promise((resolve) => {
    // Simulating API call and resolving with response data after a 1-second delay
    setTimeout(() => {
      resolve({
        status: 200,
        body: 'photo-profile-1',
      });
    }, 1000);
  });
}

// Simulated function to create a user in the API
function createUser(userData) {
  return new Promise((resolve) => {
    // Simulating API call and resolving with response data after a 1-second delay
    setTimeout(() => {
      resolve({
        firstName: 'Guillaume',
        lastName: 'Salva',
      });
    }, 1000);
  });
}

module.exports = {
  uploadPhoto,
  createUser,
};
