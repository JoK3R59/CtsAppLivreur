import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const _HistoLoad = ({navigation}) => {

    return (

        <View style = { styles.container }>
            <View style = {[styles.box, { flexDirection : "column" }]}>
                <View style = {[styles.box, { flexDirection : "row" , justifyContent: "space-between"}]}>
                    <View style = {styles.box_number}>
                        <Text style = {styles.number_box}>5</Text>
                        <Text style = {styles.text_box}>Produits</Text>
                    </View>
                    <View style = {[styles.box, { flexDirection : "column" }]}>
                        <View style = {styles.status_bar_ext}>
                            <View style ={styles.status_bar_int}><MaterialCommunityIcons name="truck-delivery" size={20} color="white" /></View>
                        </View>
                        <View style = {styles.status_bar_textbox}>
                            <Text style = {[{fontSize: 17}]}>Livré</Text>
                        </View>
                    </View>
                </View>
                <View style = {[styles.box, { flexDirection : "row" , justifyContent: "space-around"}]}>
                    <View style = {styles.buttonbox}>
                        <Button
                            onPress={ () => {
                            /*navigation.navigate()*/
                            }}
                            title="Afficher"
                            color="#841584"
                        >{navigation}</Button>
                    </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#d5f5e3',
        margin: 5

    },
    number_box: {
        fontSize: 17
    },
    text_box: {
        fontSize: 13
    },
    status_bar_ext: {
        width: 150,
        height:20,
        marginTop: 15,
        marginRight: 50,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 19,
        justifyContent: "space-between"

    },
    status_bar_int:{
        width: "100%",
        height: "100%",
        backgroundColor:"#48C9B0",
        alignItems:"flex-end",
        paddingRight:3,
        borderRadius: 19
    },
    box_number: {
        flexDirection: "column",
        marginTop: 5,
        marginLeft: 5,
        borderRadius: 100,
        borderWidth: 2.5,
        borderColor:"#2e4053",
        width: 65,
        height: 65,
        backgroundColor: '#e6e8dd',
        alignItems: 'center',
        paddingTop: 10
    },
    buttonbox: {
        marginBottom: 10
    }
});

export default _HistoLoad;