import { Text,SafeAreaView, View, TouchableOpacity, StyleSheet,Image} from "react-native";
import { colors } from "../utils/colors";

export default function AlternativeLogins() {

    return (
        <SafeAreaView>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.iconButtonContainer}>
                    <Image source={require('../assets/Facebook.png')} style={styles.iconImage}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButtonContainer}>
                    <Image source={require('../assets/Google-logo.png')} style={styles.iconImage}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButtonContainer}>
                    <Image source={require('../assets/Logo_Twitter.png')} style={styles.iconImage}/>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconButtonContainer: {
        marginHorizontal: 5,
        paddingVertical: 20,
        paddingHorizontal: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.grey
    },
    iconImage: {
        height: 18,
        width: 19
    }
});