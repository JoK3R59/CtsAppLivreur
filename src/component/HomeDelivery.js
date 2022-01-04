import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import _DeliveryBox from '../_shared/_DeliveryBox';
const HomeDelivery = ( {navigation} ) => {

    return (

        <View  style = { styles.container }>
            <View style = {[{height: "auto", width: "100%", marginBottom: 5}]}>
                <Text style = { styles.header }>Livraison Prioritaire:</Text>
            </View>
            <View style ={[{height: "auto", width: "100%", marginBottom: 5}]}>
                <Text style = {styles.header}>Demande Particulier:</Text>
            </View>
            <_DeliveryBox navigation = {navigation}/>
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#48c9b0'
    },
    header_container:{
        
    },
    header: {
        backgroundColor: `white`,
        width: '100%',
        padding: 10,
        fontSize: 24
    }
});

export default HomeDelivery;