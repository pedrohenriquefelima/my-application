import { useLayoutEffect } from "react";
import { Text, View, Button, StyleSheet} from "react-native";
import { colors } from "../utils/colors";

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
        <View style={styles.container}>
            <Text style={styles.title}>{welcomeMode}</Text>
            {/* form goes here */}
            {/* alternative create account */}
            {/* already have an account */}
            <Button
                title="Go home"
                onPress={goHome}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.white,
        paddingTop: 30,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 30,
        fontWeight: '700'
    }
})