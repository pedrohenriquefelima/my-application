import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './screens/Welcome';
import CreateAccountAndLogIn from './screens/CreateAccountAndLogIn';
import Home from './screens/Home';


const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Welcome" component={Welcome}/>
                <Stack.Screen name="CreateOrLogin" component={CreateAccountAndLogIn} options={{
                        // Hide the title but keep the header
                        headerTitle: '',
                        headerBackTitleVisible: true
                    }}/>
                <Stack.Screen name="MainHome" component={Home} options={{ headerLeft: () => null }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}