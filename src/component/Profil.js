import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profil = ( props ) => {

    return (

        <View style = { styles.container }>
            
            <Text>
                Profil Screen
            </Text>
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey'
    }
});

export default Profil;