const { Storage } = require('@google-cloud/storage');
const path = require('path');

// Path to your service account key file
const serviceKey = path.join(__dirname, 'lloyds-hack-grp-22-a8d558adf1df.json');

// Create a storage client
const storage = new Storage({
  keyFilename: serviceKey,
  projectId: 'lloyds-hack-grp-22',
});

// Name of the bucket
const bucketName = 'ltcresourcefilebucket';

// Function to upload a file
async function uploadFile(filePath, destination) {
  await storage.bucket(bucketName).upload(filePath, {
    // Support for HTTP requests made with `Accept-Encoding: gzip`
    gzip: true,
    // By setting the option, you are preventing the upload of this file
    // if the file is already present in the bucket.
    metadata: {
      cacheControl: 'public, max-age=31536000',
    },
    destination: destination,
  });

  console.log(`${filePath} uploaded to ${bucketName}`);
}

// Example usage
// uploadFile('/Users/uditdagar/Downloads/SoftwareArchitectureWorkbook.pdf', 'ltcresourcefilebucket/pdf')
//   .then(() => console.log('File uploaded successfully'))
//   .catch(err => console.error('Error uploading file:', err));

module.exports = { uploadFile };
