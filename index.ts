const textToImage = require('text-to-image');

// using the asynchronous API with await
// const dataUri = await textToImage.generate('Lorem ipsum dolor sit amet');

// using the asynchronous API with .then
textToImage.generate('Lorem ipsum dolor sit amet').then(function (dataUri) {
  // use the dataUri
});

// using the synchronous API
const dataUri = textToImage.generateSync('Lorem ipsum dolor sit amet');
