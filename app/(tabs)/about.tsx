import {Text, View, StyleSheet} from "react-native"

export default function AboutScreen() {
    return (
        <View
            style={styles.container}
        >
            <Text style={styles.text}>
                About page
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a6d1f3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#000',
    },
})