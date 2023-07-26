// Assuming you have the required libraries and modules imported
import { uploadPhoto, createUser } from './utils.js';

function getResponseFromAPI() {
  // Replace the API call below with the actual API call you want to make.
  // In this case, we are calling the `uploadPhoto` and `createUser` functions from utils.js
  return new Promise((resolve, reject) => {
    // First, call uploadPhoto
    utils.uploadPhoto(photoData)
      .then(uploadPhotoResponse => {
        // If uploadPhoto is successful, call createUser
        utils.createUser(userData)
          .then(createUserResponse => {
            // If both uploadPhoto and createUser are successful, resolve with the combined responses
            resolve({
              uploadPhoto: uploadPhotoResponse,
              createUser: createUserResponse,
            });
          })
          .catch(error => {
            // If there's an error in createUser, reject with the error
            reject(error);
          });
      })
      .catch(error => {
        // If there's an error in uploadPhoto, reject with the error
        reject(error);
      });
  });
}

