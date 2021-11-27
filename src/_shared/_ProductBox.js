import React from 'react';
import { View, Text, StyleSheet,Button} from 'react-native';

const _ProductBox = (props) => {

    return (

        <View style = {[styles.container, { flexDirection : "column" }]}>
            <View style = {[styles.header, { flexDirection : "row" }]}>

                <View style = { styles.product_order}>
                    <Text>1</Text>
                </View>
                <View>
                    <Text style = { styles.title}>Cannapé d'angle</Text>
                </View>

            </View >
            <View style = {[styles.content, { flexDirection : "row" }]}>
                <View style = { styles.property}><Text style = { styles.text}>H1.50m L90cm P20cm</Text></View>
                <View style = { styles.property}><Text style = { styles.text}>64 Kg</Text></View>
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
    font: {
        fontSize: 22,
    },
    header:{
        backgroundColor: 'grey'
    },
    content: {
        backgroundColor: 'grey'
    },
    property: {
        marginLeft: 45,
        backgroundColor: 'white',
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
        borderRadius: 100,
        borderWidth: 0.5,
        width: 40,
        height: 40,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 10
    }
});

export default _ProductBox;