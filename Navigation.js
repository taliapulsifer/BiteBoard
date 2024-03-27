import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons } from '@expo/vector-icons';
import { Feed, RestaurantProfile, Search, UserProfile } from './screens/index.js'; // Import all screens from index.js
import TopBar from './components/TopBar.js';
// ######## SCREEN STACKS ########

// Feed: Instantiate the stack navigator
const FeedStack = createNativeStackNavigator();

// Function to wrap Feed related screens in the FeedStack
function FeedStackGroup() {
    return (
        <FeedStack.Navigator 
            screenOptions={{
                headerShown: true, // Enable the header
                header: ({ navigation }) => <TopBar navigation={navigation} />, // Use TopBar as the header
        }}>
            <FeedStack.Screen name="FeedHome" component={Feed} options={{ title: 'Feed' }} />
            <FeedStack.Screen name="Retaurant" component={RestaurantProfile} />
        </FeedStack.Navigator>
    );
}

// Search: Instantiate the stack navigator
const SearchStack = createNativeStackNavigator();

// Function to wrap Feed related screens in the FeedStack
function SearchStackGroup() {
    return (
        <SearchStack.Navigator 
            screenOptions={{
                headerShown: true, // Enable the header
                header: ({ navigation }) => <TopBar navigation={navigation} />, // Use TopBar as the header
        }}>
            <SearchStack.Screen name="SearchHome" component={Search} options={{ title: 'Search' }} />
            <SearchStack.Screen name="Retaurant" component={RestaurantProfile} />

        </SearchStack.Navigator>
    );
}

// UserProfile: Instantiate the stack navigator
const UserStack = createNativeStackNavigator();

// Function to wrap Feed related screens in the FeedStack
function UserStackGroup() {
    return (
        <UserStack.Navigator 
            screenOptions={{
                headerShown: true, // Enable the header
                header: ({ navigation }) => <TopBar navigation={navigation} />, // Use TopBar as the header
        }}>
            <UserStack.Screen name="UserProfileHome" component={UserProfile} options={{ title: 'UserProfile' }} />
        </UserStack.Navigator>
    );
}

// ######## BOTTOM TAB BAR ########

// Instantiate the bottom Tab bar
const Tab = createBottomTabNavigator();

// style configurations for the tab bar
const tabScreenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        backgroundColor: 'white',
        height: 70,
    }
};

// The navbar buttons
function TabGroup() {
    return (
        <Tab.Navigator screenOptions={tabScreenOptions}>
            <Tab.Screen 
                name='Feed' 
                component={FeedStackGroup}
                options={{
                    tabBarIcon: () => (
                        <Octicons 
                            name={"home"} 
                            size={26} 
                            color={"black"}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="Search" 
                component={SearchStackGroup}
                options={{
                    tabBarIcon: () => (
                        <Octicons 
                            name="search" 
                            size={26}
                            color={"black"} 
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="UserProfile" 
                component={UserStackGroup}
                options={{
                    tabBarIcon: () => (
                        <Octicons 
                            name={"person"} // Use "person" for both focused and unfocused
                            size={26}
                            color={"black"} // Change colors accordingly
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

// return the tabBar
export default function Navigation() {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  );
}

