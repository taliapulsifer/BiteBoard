import { DataStore } from '@aws-amplify/datastore';
import { User } from './models';

async function createUser(password, email) {
    try {
        // Assuming userId and username are defined elsewhere
        const user = await DataStore.save(new User({
            email: email,
            // Spread syntax (...) is used to expand an object into multiple key-value pairs
            // If you have additional profile data, you can include it here
        }));
        console.log('User profile created:', user);
        // Redirect to home page or perform any necessary actions
    } catch (error) {
        console.error('Error creating user profile:', error);
    }
}

export default createUser;