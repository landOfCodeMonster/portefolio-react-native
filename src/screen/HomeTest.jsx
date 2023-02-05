import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { Expo, ImageExpo } from "../components";
import { Badge } from '@rneui/themed';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

export default function HomeTest() {
    const datas = require('../../src/data/data.json')

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 5, 
                backgroundColor: '#3D9ED7', borderBottomStartRadius: 10,
                 borderBottomEndRadius: 150, maxHeight: 250, borderTopRightRadius: 150, borderTopLeftRadius: 150}}>
                <ImageExpo />
                <Text style={{ fontSize: 30, fontWeight: 'bold'}}>{datas.profile.name}</Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 10,color: '#fff'}}>{datas.profile.work}</Text>
                <Text style={{ fontSize: 15, marginTop: 14, color: '#fff'}}>
                {datas.profile.word}
                </Text>  
            </View>
            <View style={{ flex: 1}}>

                <View style={{ flex: 1, marginTop: 20 ,maxHeight: 120}}>
                    <View style={{ flex: 1, flexDirection: 'row', maxHeight: 40}}>
                        <MaterialIcons name="sports-volleyball" size={30} color="black" />
                        <Text style={styles.title}>Hobbies</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', margin: 10, justifyContent: 'space-around'}}>
                    { datas.hobbies.map(data => 
                            <Badge badgeStyle={styles.badgeContainer} value={data.name} />
                            ) }
                    </View>
                </View>  

                <View style={{ flex: 1}}>
                    <View style={{ flex: 1, flexDirection: 'row', maxHeight: 40}}>
                        <Entypo name="price-ribbon" size={30} color="black" />
                        <Text style={styles.title}>Experience Professionel</Text>
                    </View>

                    <FlatList 
                        data={datas.pro}
                        keyExtractor={(item, index) => index}
                        renderItem={({item}) => <Expo data={item}/>  } 
                        />
                </View>

                <View>
                <Button
                    title="Press me"
                    onPress={() => 
                        Linking.openURL(
                        `sms:&body=Hello c'est ${datas.profile.name} - ${datas.profile.work} [Hobbies]:${datas.hobbies.map(data => data.name)} \n [expérience professionel]: ${datas.pro.map(data => data.name)}`)}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    badgeContainer: {
        width: 80,
        height: 30
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
      },
      title: {
        fontSize: 30
    },
})