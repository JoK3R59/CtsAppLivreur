import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import _ProductBox from '../_shared/_ProductBox';

const DeliveryScreen = ({navigation}) => {

    return (

        <View style = { styles.header }>
            <View style = {[styles.box, { flexDirection : "column" }]}>
                <View style = {[styles.content, { flexDirection : "row" }]}>
                    <View style = {[styles.content, { flexDirection : "column" }]}>
                        <Text>Demande pour le :</Text>
                        <Text>13/12/2021</Text>
                        <Text>_________________</Text>
                    </View> 
                </View>
                
            </View>
            <_ProductBox />
            <View style = {[styles.bottom, { flexDirection : "row" }]}>
                <View style = { styles.tab}/>
                <View  style = {[styles.bottom, { flexDirection : "column" }]}>
                    <Text>livraison à :</Text>
                    <Text>11 rue saint didier des bois</Text>
                </View>
            </View >
            <View style = {[styles.list_Sproperty, { flexDirection : "column" }]}>
                <View style = {[styles.bottom, { flexDirection : "row" }]}>
                    <View style = {styles.circle_property}/>
                    <Text>fragile</Text>
                </View>
                <View style = {[styles.bottom, { flexDirection : "row" }]}>
                    <View style = {styles.circle_property}/>
                    <Text>récéption en main propre</Text>
                </View>
                <View style = {[styles.bottom, { flexDirection : "row" }]}>
                    <View style = {styles.circle_property}/>
                    <Text>hayon</Text>
                </View>
            </View>
            <View style = {[styles.bottom, { flexDirection : "column" }]}>
                <Text style = {styles.Title_spe_client}>Notes du clients</Text>
                <View style = {styles.notes_box}>
                    <Text>Sonner à la porte</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    header: {
        width: '100%', 
        backgroundColor: `#f0f8ff`,
        fontSize: 24
    },
    box: {
        marginVertical: 12,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // // flexDirection: 'row',
        // alignItems: 'center',
        // padding: 12,
        // marginLeft: -18,
        // // marginTop: -18,
        // // marginBottom: -38,
        // // backgroundColor: 'red'
        // borderWidth: 2
        backgroundColor: 'grey'
    },
    tab: {
        width:5,
        backgroundColor: 'grey'
    },
    bottom: {
        backgroundColor: 'white',
        marginTop: 5
    },
    button:{
        width: 80,
        alignItems: 'center'

    },
    list_Sproperty:{
        marginTop: 15,
        backgroundColor: 'white'
    },
    circle_property:{
        borderRadius: 100,
        borderWidth: 0.5,
        width: 5,
        height: 5,
        backgroundColor: 'blue',
        alignItems: 'center',
        paddingTop: 10,
        marginLeft: 15
    },
    Title_spe_client: {
        marginLeft: 5,
        fontSize: 15,
    },
    notes_box:{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        width: '90%',
        height: 50,
        marginLeft: 5,
    }
});

export default DeliveryScreen;