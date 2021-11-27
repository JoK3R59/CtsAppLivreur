import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
const _DeliveryBox = ({navigation}) => {
    return (
        <View style = {[styles.box, { flexDirection : "column" }]}>
            <View style = {[styles.content, { flexDirection : "row" }]}>

                <View style = { styles.produit }>

                    <Text>2 Produits</Text>
                </View>

                <View style = {[styles.content, { flexDirection : "column" }]}>

                    <Text>Demande pour le :</Text>

                    <Text>13/12/2021</Text>
                </View>
            </View>
            <View style = {[styles.content, { flexDirection : "row" }]}>

                <View style = { styles.box }>

                    <Text>A</Text>
                </View>

                <View style = {[styles.content, { flexDirection : "column" }]}>

                    <Text>Enlèvement à :</Text>

                    <Text>11 rue saint didier des bois</Text>
                </View>
            </View>
            <View style = {[styles.content, { flexDirection : "column" }]}>

                <View style = { styles.content }>

                    <Text>|</Text>
                    <Text>|</Text>
                    <Text>v</Text>
                </View>

            </View>
            <View style = {[styles.content, { flexDirection : "row" }]}>

                <View style = { styles.box }>

                    <Text>B</Text>
                </View>

                <View style = {[styles.content, { flexDirection : "column" }]}>

                    <Text>Livraison à :</Text>

                    <Text>11 rue de la cathédrale       </Text>
                    
                    <Button
                        onPress={ () => {
                        navigation.navigate('Delivery_screen')
                        }}
                        title="voir +"
                        color="#841584"
                    />
                </View>
                
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    header: {
        backgroundColor: `#f0f8ff`,
        width: '100%',
        borderWidth: 0.5,
        padding: 10,
        fontSize: 24
    },
    box: {
        marginVertical: 12,
        padding: 10,
        borderWidth: 0.5,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12,
        marginBottom: 5
    },
    produit:{
        marginVertical: 12,
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 100
    }
});

export default _DeliveryBox;