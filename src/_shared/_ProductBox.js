import React from 'react';
import { View, Text, StyleSheet,Button} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const _ProductBox = (props) => {

    return (

        <View style = {[styles.container, { flexDirection : "column" }]}>
            <View style = {[{ flexDirection : "row" }]}>

                <View style = { styles.product_order}>
                    <Text>1</Text>
                </View>
                <View>
                    <Text style = { styles.title}>Cannapé d'angle</Text>
                </View>

            </View >
            <View style = {[{ flexDirection : "row", justifyContent:"space-around"}]}>
                
                <View style = { styles.property1}><Entypo name="box" size={15} color="black" /><Text style = {[{ fontSize:12}]}>H 1.2m /L 90cm /P 90cm </Text></View>
                <View style = { styles.property2}><MaterialCommunityIcons name="weight" size={15} color="black" /><Text style = {[{ fontSize:12}]}>21 kg</Text></View>
            </View>
            <View style = {[styles.bottom, { flexDirection : "row" }]}>
                <View style = { styles.tab}/>
                <View  style = {[styles.bottom, { flexDirection : "column" }]}>
                    <Text>Enlèvement à :</Text>
                    <Text>11 rue saint didier des bois</Text>
                </View>

                
            </View >
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#D5F5E3',
        marginHorizontal: 5,
        marginTop: 5,
        borderRadius:19,
        paddingBottom: 5
    },
    tab: {
        width:5,
        backgroundColor: '#48C9B0',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    bottom: {
        backgroundColor: 'white',
        marginTop:5,
        marginBottom:10,
        marginHorizontal:10,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        width: "75%"
    },
    font: {
        fontSize: 22,
    },
    property1: {
        backgroundColor: 'white',
        borderRadius: 100,
        padding: 5,
        flexDirection : "row"
    },
    property2: {
        backgroundColor: 'white',
        borderRadius: 100,
        padding: 5,
        flexDirection : "row"
    },
    text: {
        fontSize: 20
    },
    title: {
        fontSize: 20,
        paddingLeft: 5
    },
    number : {
        fontSize: 5
    },
    product_order:{
        marginTop: 5,
        marginLeft: 5,
        borderRadius: 100,
        borderWidth: 2.5,
        borderColor:"#2e4053",
        width: 30,
        height: 30,
        backgroundColor: '#e6e8dd',
        alignItems: 'center'
    }
});

export default _ProductBox;