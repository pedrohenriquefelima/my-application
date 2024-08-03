import { useLayoutEffect, useState } from "react";
import { Text, View, Button, StyleSheet, SafeAreaView} from "react-native";
import { colors } from "../utils/colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import AlternativeLogins from "../components/AlternativeLogins";

export default function CreateAccountAndLogIn({route, navigation}) {
    const [secureEntry, setSecureEntry] = useState(false);
    const [secureEntryIcon, setSecureEntryIcon] = useState('eye-slash');

    const welcomeMode = route?.params?.createOrSignIn;
    useLayoutEffect(() => {
        navigation.setOptions({
            title: welcomeMode
        })
    }, [welcomeMode, navigation]);

    function goHome() {
        navigation.navigate('MainHome');
    }

    function reverseVisibleHandler() {
        setSecureEntry((prev)=> !prev);
        secureEntry ? setSecureEntryIcon('eye') : setSecureEntryIcon('eye-slash');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                <TouchableOpacity style={styles.backButtonWrapper} onPress={() => navigation.navigate('Welcome')}>
                    <Ionicons name="arrow-back" size={25} color={colors.black} />
                </TouchableOpacity>
                <Text style={styles.title}>{welcomeMode}</Text>
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.textInput} placeholder="Email address" keyboardType="email-address"/>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={secureEntry}/>
                        <TouchableOpacity onPress={reverseVisibleHandler}>
                            <FontAwesome5 name={secureEntryIcon} size={16} color={colors.greyMedium} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.textInput} placeholder="Confirm password" secureTextEntry={secureEntry}/>
                        <TouchableOpacity onPress={reverseVisibleHandler}>
                            <FontAwesome5 name={secureEntryIcon} size={16} color={colors.greyMedium} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.createAccount} onPress={goHome}>
                        <Text style={styles.buttonText}>Create account</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.alternativeSeparatorContainer}>
                    <View style={[styles.lineBorder, styles.marginRight]}/>
                    <Text>Or create account  with</Text>
                    <View style={[styles.lineBorder, styles.marginLeft]}/>
                </View>
                <View style={{marginTop: 40}}>
                    <AlternativeLogins/>
                </View>
            </View>
                
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    subContainer: {
        marginHorizontal: 20
    },
    title: {
        marginTop: 20,
        fontSize: 30,
        fontWeight: '700'
    },
    backButtonWrapper: {
        height: 40,
        width: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        marginTop: 40
    },
    inputContainer: {
        width: '100%',
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 20,
        marginBottom: 28,
        padding: 2,
        borderColor: colors.grey,
        borderRadius: 10,
        borderWidth: 1,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
    },
    createAccount: {
        width: '100%',
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
    alternativeSeparatorContainer: {
        width: '100%',
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lineBorder: {
        width: '25%',
        borderBottomColor: colors.grey,
        borderBottomWidth: 2
    },
    marginRight: {
        marginRight: 10
    },
    marginLeft: {
        marginLeft: 10
    }

})