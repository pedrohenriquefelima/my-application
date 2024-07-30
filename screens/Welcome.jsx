import { Text, SafeAreaView, Button, View, Image, StyleSheet, TouchableOpacity} from "react-native";
import { colors } from "../utils/colors";


export default function Welcome({navigation}) {
      
    return (
        <View style={styles.container}>
            <Image source={require("../assets/welcome-running.jpg")} style={styles.welcomeImage}/>
            <Text style={styles.hiWelcome}>Hi, Welcome!</Text>
            <Text style={styles.hiWelcomeSub}>
                This is some dummy text. It takes up three lines of text to show you an example of how your text will look.
            </Text>
            <TouchableOpacity style={styles.createAccount} onPress={() => navigation.navigate('CreateOrLogin')}>
                <Text style={styles.createAccountText}>Create account</Text>
            </TouchableOpacity>
            <View>
                <Button title="Log in" onPress={() => navigation.navigate('CreateOrLogin')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center"
    },
    welcomeImage: {
        width: '100%',
        height: '55%'
    },
    hiWelcome: {
        backgroundColor: 'red',
        fontSize: 30,
        fontWeight: '700',
        margin: 20,
        lineHeight: '50%',
    },
    hiWelcomeSub: {
        width: '90%',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 20
    },
    createAccount: {
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primaryOrange,
        borderRadius: 10,
        marginBottom: 10
    },
    createAccountText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '600',
    },
})