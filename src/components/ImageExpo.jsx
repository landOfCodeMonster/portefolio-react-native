import { Image, StyleSheet, View } from "react-native";


export default function ImageExpo() {
    return (
        <View > 
            <Image 
            style={styles.tinyLogo}
            source={require('../../assets/user.png')} />
        </View>
    )
}


const styles = StyleSheet.create({
    tinyLogo: {
        width: 100,
        height: 100,
        margin: 5
    }
})