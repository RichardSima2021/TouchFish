import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router"

export default function Index() {
  return (
    <View
      style={styles.container}
    >
        <Text style={styles.text}>Put a fish here</Text>
        <Text style={styles.button}>
            <Link href='/about' >
                Go to About Screen
            </Link>
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#a6d1f3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: '#000000',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#212121',
    },
});
