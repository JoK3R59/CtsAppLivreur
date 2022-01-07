import React from 'react';
import { View, FlatList, StyleSheet, Text,TouchableHighlight} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const DATA = [
    {
        title: 'Mes infos',
    },
    {
        title: 'Historique de livraison',
    }
];

const Item = ({ title,navigation}) => (
    <TouchableHighlight onPress={ () => {
        navigation.navigate(title)
        }}> 
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <AntDesign name="rightcircleo" size={24} color="black" />
        </View>
    </TouchableHighlight>
);
  
const Profil = ({navigation}) => {
    const renderItem = ({ item }) => (
        <Item title={item.title} navigation={navigation} />
      );
    return (

        <View style = { styles.container }>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item,index) => index.toString()}
            />
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#48C9B0'
    },
    item: {
        backgroundColor: 'white',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 5,
        flexDirection:"row",
        justifyContent:"space-between"
      },
      title: {
        fontSize: 20,
      }
});

export default Profil;