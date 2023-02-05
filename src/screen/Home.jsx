import { useEffect } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { Expo, ImageExpo } from "../components";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Badge, Banner, Box, Divider } from "@react-native-material/core";

const datas = require('../../src/data/data.json')

export default function Home() {

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <ImageExpo style={{ flex: 1}}/>
                <View style={{ flex: 1}}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold'}}>Peter PARKER</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', paddingTop: 10}}>Developpeur React Native</Text>
                    <Text>Développeur freeLance dans le developpement mobile. Pationné de UI/Ux design</Text>  
                </View>
            </View>
            {/* <ScrollView> */}
            <View style={{ flex: 1, backgroundColor: 'grey'}}>
                <View style={{ flex: 1}}>
                    <MaterialIcons name="sports-volleyball" size={30} color="black" />
                    <Text style={styles.title}>Hobbies</Text>
                </View>
                {/* <Box w={350} h={5} m={2}  style={{marginBottom:20, backgroundColor: 'tomato'}}/> */}
                {/* <FlatList 
                    data={datas.hobbies}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) => <Expo data={item}/>  } 
                    /> */}
                <View style={{flexDirection: 'row'}}>
                    {
                        datas.hobbies.map(data => (
                            <View>
                                <Badge style={{ margin: 5}} label={data.name} />
                            </View>
                        ))
                    }
                </View>
                    
            </View>
            
            <View style={{ flex: 1}}>
                <View style={styles.rubrique}>
                    <Entypo name="price-ribbon" size={30} color="black" />
                    <Text style={styles.title}>Experience Professionel</Text>
                </View>
                <Box w={350} h={5} m={4}  style={{ backgroundColor: 'tomato'}}/>

                 <FlatList 
                    data={datas.pro}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) => <Expo data={item}/>  } 
                    />
            </View>
            {/* </ScrollView> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rubrique: {
        flex: 1,
    },
    title: {
        fontSize: 30
    },
    profile: {
        flex: 1,
        marginBottom: 50,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
    }

  });