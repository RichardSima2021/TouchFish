import { View, StyleSheet, Text } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.button}>
                <Link href='/' >
                    Go to Home
                </Link>
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3dab8',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#212121',
    },
})