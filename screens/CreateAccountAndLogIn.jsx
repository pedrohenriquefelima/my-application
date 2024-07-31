import { useLayoutEffect, useState } from "react";
import { Text, View, Button, StyleSheet, SafeAreaView} from "react-native";
import { colors } from "../utils/colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

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
                <TouchableOpacity style={styles.backButtonWrapper}>
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
                    <View/>
                    <Text>Or create account  with</Text>
                    <View/>
               </View>
                
                {/* already have an account */}
                {/* <Button
                    title="Go home"
                    onPress={goHome}
                /> */}

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
        paddingLeft:10
    },
    title: {
        marginTop: 20,
        marginLeft:10,
        fontSize: 30,
        fontWeight: '700'
    },
    backButtonWrapper: {
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        marginLeft:10,
        marginTop: 40
    },
    inputContainer: {
        width: '90%',
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
        marginLeft:10
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
    }
    
})