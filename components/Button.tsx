import { StyleSheet, View, Pressable, Text } from "react-native";

type Props = {
    label: string;
};

export default function Button({ label }: Props) {
    return (
        <View style={style.buttonContainer}>
            <Pressable style={style.button} onPress={()=> alert('摸鱼启动')}>
                <Text style={style.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const style = StyleSheet.create({
    buttonContainer: {
        width:200,
        height:50,
        backgroundColor:'#dcc08f',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        // backgroundColor:'cyan',
    },
    buttonLabel: {

    }
})