import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { Feed, RestaurantProfile, Search, UserProfile } from './screens/index.js'; // Import all screens from index.js


// ######## SCREEN STACKS ########

// Feed: Instantiate the stack navigator
const FeedStack = createNativeStackNavigator();

// Function to wrap Feed related screens in the FeedStack
function FeedStackGroup() {
    return (
        <FeedStack.Navigator screenOptions={{ headerShown: false }}>
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
        <SearchStack.Navigator screenOptions={{ headerShown: false }}>
            <SearchStack.Screen name="SearchHome" component={Search} options={{ title: 'Search' }} />
        </SearchStack.Navigator>
    );
}

// UserProfile: Instantiate the stack navigator
const UserStack = createNativeStackNavigator();

// Function to wrap Feed related screens in the FeedStack
function UserStackGroup() {
    return (
        <UserStack.Navigator screenOptions={{ headerShown: false }}>
            <SearchStack.Screen name="UserProfileHome" component={UserProfile} options={{ title: 'UserProfile' }} />
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

function TabGroup() {
    return (
        <Tab.Navigator screenOptions={tabScreenOptions}>
            <Tab.Screen 
                name='Feed' 
                component={FeedStackGroup}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? "home" : "home-outline"} 
                            size={24} 
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="Search" 
                component={SearchStackGroup}
                options={{
                    tabBarIcon: () => {
                        return <Ionicons name={"search-sharp"} 
                        size={24}
                        />}
                    }}
                />
                        <Tab.Screen 
            name="UserProfile" 
            component={UserStackGroup}
            options={{
                tabBarIcon: ({focused}) => {
                    return <Ionicons name={focused ? "person" : "person-outline"} 
                    size={24}
                    />}
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

