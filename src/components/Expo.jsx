import { StyleSheet, Text, View } from "react-native";

export default function Expo({data}) {

    let { name, year, town } = data
    return (
        <View style={styles.row}>
          { year && <View >
                <Text>{year} - </Text>
            </View>
            }  
            <View>
                <Text>{name}</Text>
            </View>
            <View>
                <Text> - {town}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        padding: 12,
        borderStyle: "solid",
        
    },

})