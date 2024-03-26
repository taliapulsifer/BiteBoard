import axios from 'axios';

export const fetchRestaurants = async (latitude, longitude, apiKey) => {
    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
            params: {
                location: `${latitude},${longitude}`,
                radius: 5000,
                type: 'restaurant',
                key: apiKey,
            },
        });

        const { results } = response.data;
        return results;
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        throw error;
    }
};

// Example usage:
const APIKey = "AIzaSyAqTnyXrl2bd8N8jje5M1ghetrIrS7HdP4";
const latitude = 29.8833; // Example latitude
const longitude = -97.9414; // Example longitude

// Call the fetchRestaurants function here
fetchRestaurants(latitude, longitude, APIKey)
    .then(restaurants => {
        console.log('Fetched restaurants:', restaurants);
    })
    .catch(error => {
        console.error('Error:', error);
    });