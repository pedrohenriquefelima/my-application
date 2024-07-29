import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './screens/Welcome';
import CreateAccountAndLogIn from './screens/CreateAccountAndLogIn';


const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="CreateOrLogin" component={CreateAccountAndLogIn} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}