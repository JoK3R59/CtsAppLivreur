import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import _DeliveryBox from '../_shared/_DeliveryBox';
const HomeDelivery = ( {navigation} ) => {

    return (

        <View  style = { styles.container }>

            <Text style = { styles.header }>
                Livraison Prioritaire:
            </Text>
            <Text style = { styles.header }>
                Demande Particulier:
            </Text>
            <_DeliveryBox navigation = {navigation}/>
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 'auto'
    },
    header: {
        backgroundColor: `#f0f8ff`,
        width: '100%',
        borderWidth: 0.5,
        padding: 10,
        fontSize: 24
    }
});

export default HomeDelivery;