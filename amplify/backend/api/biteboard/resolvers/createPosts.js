const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
const S3 = new AWS.S3();

// Define the uploadPhotoToS3 function
async function uploadPhotoToS3(photo) {
    // Generate a unique filename for the photo (you may adjust this based on your requirements)
    const filename = `${Date.now().toString()}.jpg`;

    // Convert the base64-encoded photo data to a Buffer
    const photoData = Buffer.from(photo, 'base64');

    // Upload the photo to S3
    const params = {
        Bucket: 'photos-for-posts', // Replace with your S3 bucket name
        Key: filename,
        Body: photoData,
        ContentType: 'image/jpeg' // Adjust the content type based on the image format
    };

    try {
        const uploadedObject = await S3.upload(params).promise();
        return { url: uploadedObject.Location }; // Return the URL of the uploaded photo
    } catch (error) {
        console.error('Error uploading photo to S3:', error);
        throw new Error('An error occurred while uploading photo to S3.');
    }
}

exports.handler = async (event) => {
    // Extract necessary data from the mutation event
    const { userID, restaurantID, caption, photo } = event.arguments;
    const datePosted = new Date().toISOString();

    try {
        // Upload the photo to S3
        const uploadedPhoto = await uploadPhotoToS3(photo);
        const postId = generateRandomHex();

        // Create the post object
        const post = {
            id: postId,
            userID,
            restaurantID,
            datePosted,
            caption,
            photo: uploadedPhoto.url // Store the S3 object URL in the post
        };

        // Write the post data to the database
        const params = {
            TableName: 'PostsTable',
            Item: post
        };

        await docClient.put(params).promise();
        return post;
    } catch (error) {
        console.error('Error creating post:', error);
        throw new Error('An error occurred while creating the post.');
    }
};

function generateRandomHex() {
    const hexDigits = '0123456789abcdef';
    let hex = '';
    for (let i = 0; i < 10; i++) {
        hex += hexDigits.charAt(Math.floor(Math.random() * hexDigits.length));
    }
    return hex;
}
