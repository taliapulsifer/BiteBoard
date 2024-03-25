import axios from 'axios';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports'; // Import your Amplify configuration

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

// Fetch and store restaurant data
export const fetchAndStoreRestaurants = ansync (latitude, longitude, apiKey) => {
    try{

        //Fetch restaurants data from Google places API
        const restaurants = await fetchRestaurants(latitude, longitude, apiKey);
        
        //Process and store fetched data on database
        for(const restaurant of restaurants)
        {
            const createRestaurantMutation = `
            mutation CreateRestaurant($input: CreateRestaurantInput!) {
                createRestaurant(input: $input) {
                    id
                    name
                    address
                    cuisineType
                    open
                    ratings
                    reviews
                    updatedAt
                }
            }
        `;

        //Define input variables for the mutation
        const createRestaurantInput = {
            input: {
                name: restaurant.name,
                address: restaurant.vicinity,
            }
        };

        //Execute the mutation
        const createRestaurantRespone = await API.graphql(graphqlOperation(createRestaurantMutation, createRestaurantInput));
        console.log('Created restaurant: ', createRestaurantRespone.data.createRestaurant);

        }
    }catch (error)
    {
        console.error('Error fetching and storing restaurants: ', error);
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