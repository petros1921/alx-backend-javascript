export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    const success = true;

    if (success) {
      resolve('Success!');
    } else {
      reject(new Error('Failure!'));
    }
  });
}
