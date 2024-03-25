const axios = require('axios');

async function fetchRestaurantData()
{
    const APIKey = "<YOUR_GoogleAPIKey_HERE>";
    const APIURL = "URL";

    try{
        
    }
    catch(error){
        console.error('Error fetching restaurant data:', error);
        throw error;
    }
}

async function populateRestaurantData()
{
    const restaurantData = await fetchRestaurantData();
    //Store in AWS Backend
    console.log('Restaurant Data: ', restaurantData);
}

populateRestaurantData();