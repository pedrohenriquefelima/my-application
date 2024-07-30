import { Text, SafeAreaView, Button, View} from "react-native";


export default function Welcome({navigation}) {
      
    return (
        <SafeAreaView>
            <Text>Hi, Welcome</Text>
            <Text>
                This is some dummy text. It takes up three lines of text to show you an example of how your text will look.
            </Text>
            <View>
                <Button title="Create account" onPress={() => navigation.navigate('CreateAccount')} />
            </View>
            <View>
                <Button title="Log in" onPress={() => navigation.navigate('Login')} />
            </View>
        </SafeAreaView>
    )
}