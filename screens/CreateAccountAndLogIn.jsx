import { useLayoutEffect } from "react";
import { Text, SafeAreaView, Button} from "react-native";

export default function CreateAccountAndLogIn({route, navigation}) {
    const welcomeMode = route?.params?.createOrSignIn;
    useLayoutEffect(() => {
        navigation.setOptions({
            title: welcomeMode
        })
    }, [welcomeMode, navigation]);

    function goHome() {
        navigation.navigate('MainHome');
    }

    return (
        <SafeAreaView>
            <Text>View mode - create or login {welcomeMode}</Text>
            <Button
                title="Go home"
                onPress={goHome}
            />
        </SafeAreaView>
    )
}