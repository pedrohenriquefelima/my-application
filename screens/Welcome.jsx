import { Text, View, SafeAreaView, Button} from "react-native";

export default function Welcome({navigation}) {

    const handlePress = () => {
        navigation.navigate('CreateOrLogin', { createOrSignIn: 'create'});
    };

      
    return (
        <SafeAreaView>
            <Text>Welcome</Text>
            <Button
                title="Create account"
                onPress={handlePress}
            />
        </SafeAreaView>
    )
}