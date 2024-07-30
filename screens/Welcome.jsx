import { Text, SafeAreaView, Button, View, Image, StyleSheet, TouchableOpacity} from "react-native";
import { colors } from "../utils/colors";


export default function Welcome({navigation}) {
      
    return (
        <View style={styles.container}>
            <View style={styles.flexOne}>
                <Image source={require("../assets/welcome-running.jpg")} style={styles.welcomeImage}/>
            </View>
            <View style={styles.flexTwo}>
                <Text style={styles.hiWelcome}>Hi, Welcome! 👋</Text> 
                <Text style={styles.hiWelcomeSub}>
                    This is some dummy text. It takes up three lines of text to show you an example of how your text will look.
                </Text>
            </View>
            <View style={styles.flexThree}>
                <TouchableOpacity style={styles.createAccount} onPress={() => navigation.navigate('CreateOrLogin', { createOrSignIn: 'create'})}>
                    <Text style={styles.buttonText}>Create account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginAccount}  onPress={() => navigation.navigate('CreateOrLogin', { createOrSignIn: 'login'})}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.white,
        alignItems: "center"
    },
    flexOne: {
        backgroundColor: 'blue',
        width: '100%',
        flex: 10
    },
    welcomeImage: {
        width: '100%',
        height: '100%'
    },
    flexTwo: {
        width: '100%',
        flex: 4,
        alignItems: "center"
    },
    hiWelcome: {
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
    },
    flexThree: {
        width: '100%',
        flex: 3,
        alignItems: 'center'
    },
    createAccount: {
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primaryOrange,
        borderRadius: 10,
        marginBottom: 14
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '600',
    },
    loginAccount: {
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primaryGreen,
        borderRadius: 10,
        marginBottom: 10
    }
})