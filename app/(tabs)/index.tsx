import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image"
import { Link } from "expo-router"
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";


const FishImage = require('@/assets/images/fish.png');

export default function Index() {
  return (
    <View style={styles.container} >
        <View style={styles.imageContainer} >
            <ImageViewer imgSource={FishImage}/>
        </View>
        <View>
            <Button label={'开始摸鱼'}></Button>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 40,
        gap:20,  
        backgroundColor: '#a6d1f3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer:{
        height: 120,
        width: 300
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
