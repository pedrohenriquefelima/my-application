import { Text,SafeAreaView, View, TouchableOpacity, StyleSheet,Image} from "react-native";
import { colors } from "../utils/colors";
import * as WebBroser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

WebBroser.maybeCompleteAuthSession();

export default function AlternativeLogins() {
    const [userInfo, setUserInfo] = useState(null);
    const [request, response, promptAsync] = Google.useAuthRequest({
        iosClientId: "635882148943-39ltq0lvcbja5c20a19v4i9effvtbkso.apps.googleusercontent.com"
    })

    useEffect(()=> {
        //call 'handleSignInWithGoogle' whenever the response changes
        handleSignInWithGoogle();
    }, [response]);

    async function handleSignInWithGoogle() {
        const user = await AsyncStorage.getItem("@user");
        if(!user) {
            //make request to google
            if(response?.type === "success"){
                await getUserInfo(response.authentication?.accessToken);
            }
        } else {
            //use information saved in this device
            setUserInfo(JSON.parse(user));
        }
    }

    const getUserInfo = async (token: string | undefined) => {
        if (!token) return;
        try {
          const response = await fetch(
            "https://www.googleapis.com/userinfo/v2/me",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
    
          const user = await response.json();
          await AsyncStorage.setItem("@user", JSON.stringify(user));
          setUserInfo(user);
        } catch (error) {
          // Add some error handling
        }
    };
    
    return (
        <SafeAreaView>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.iconButtonContainer}>
                    <Image source={require('../assets/Facebook.png')} style={styles.iconImage}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButtonContainer} onPress={() => promptAsync()}>
                    <Image source={require('../assets/Google-logo.png')} style={styles.iconImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButtonContainer}>
                    <Image source={require('../assets/Logo_Twitter.png')} style={styles.iconImage}/>
                </TouchableOpacity>
                <Text>
                    {JSON.stringify(userInfo)}
                </Text>
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