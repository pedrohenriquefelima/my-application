import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Courses from "./Courses";
import Support from "./Support";
import Stats from "./Stats";

const Tab = createBottomTabNavigator();
      
    function TabGroup() {
        return <Tab.Navigator>
            <Tab.Screen name="tab1" component={Courses} options={{ headerShown: false }} ></Tab.Screen>
            <Tab.Screen name="tab2" component={Support} options={{ headerShown: false }} ></Tab.Screen>
            <Tab.Screen name="tab3" component={Stats} options={{ headerShown: false }} ></Tab.Screen>
        </Tab.Navigator>
    }

export default function Home({navigation}) {
    return (
            <TabGroup/>
    )
}