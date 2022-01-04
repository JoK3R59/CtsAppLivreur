import React from 'react';
import { View,StyleSheet} from 'react-native';
import _ProductBox from '../_shared/_ProductBox';
const Delivery_track2 = () => {

    return (

        <View style = { styles.container }>
            <_ProductBox />
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#48C9B0',
        width: "100%",
        height:"100%"

    }
});

export default Delivery_track2;