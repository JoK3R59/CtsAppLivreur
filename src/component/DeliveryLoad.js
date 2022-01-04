import React from 'react';
import { View, StyleSheet} from 'react-native';
import _MyDelivery from '../_shared/_MyDelivery';

const DeliveryLoad = ({navigation}) => {

    return (

        <View style = { styles.container }>
            <_MyDelivery navigation={navigation}/>
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#48c9b0',
        flex:1
    }
});

export default DeliveryLoad;