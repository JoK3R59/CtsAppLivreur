import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import _HistoLoad from '../_shared/_HistoLoad';

const HistoriqueUser = () => {
    return (

        <View style = { styles.container }>
            <_HistoLoad/>
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#48C9B0'
    },
});

export default HistoriqueUser;