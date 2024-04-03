import { DataStore } from '@aws-amplify/datastore';
import { User } from './models';

async function createUser(userId, username, profileData) {
    try {
        const user = await DataStore.save(new User({
            userID: userId,
            username,
            ...profileData
            //Spread syntax (...) is used to expand an object into multiple key-value pairs
        }));
        console.log('User profile created:', user);
        // Redirect to home page or perform any necessary actions
    } catch (error) {
        console.error('Error creating user profile:', error);
    }
}
