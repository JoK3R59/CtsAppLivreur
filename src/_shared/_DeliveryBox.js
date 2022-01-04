import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
const _DeliveryBox = ({navigation}) => {
    return (
        <View style = {[styles.box, { flexDirection : "column" }]}>
            <View style = {[{ flexDirection : "row" , justifyContent:"space-between"}]}>

                <View style = { styles.produit }>

                    <Text>2</Text>
                    <Text>Produits</Text>
                </View>

                <View style = {[styles.datebox,{ flexDirection : "column"}]}>
                    
                    <Text style = {[{fontSize: 16}]}>Demande pour le :</Text>
                    <View style = {[{flexDirection:"row"}]}>
                        <Text>13/12/2021</Text>
                        <Fontisto name="date" size={16} color="black" />
                    </View>

                   
                </View>
            </View>
            <View style = {[{ flexDirection : "row",justifyContent:"center" }]}>
                <View style = {[styles.envbox,{ flexDirection : "column" }]}>
                    <View style = {[{flexDirection:"row"}]}>
                        <Ionicons name="md-golf-sharp" size={17} color="black" />
                        <Text style = {[{fontSize: 17}]}>Enlèvement à :</Text>
                    </View>
                    <Text>11 rue saint didier des bois/ 59780/ Baisieux</Text>
                </View>
            </View>
            <View style = {[{flexDirection:"row", justifyContent:"center"}]}>
                <View style = {[{flexDirection : "column"}]}>
                 <View>
                     <Entypo name="flow-line" size={24} color="black" />
                 </View>
                 <View style={[{flexDirection:"row"}]}>
                     <MaterialCommunityIcons name="routes" size={30} color="black" />
                     <Text>+1 arrêt</Text>
                 </View>
                 <View>
                     <Entypo name="flow-line" size={24} color="black" />
                 </View>
                </View>
            </View>
            <View style = {[{ flexDirection : "row",justifyContent:"center" }]}>
                <View style = {[styles.envbox,{ flexDirection : "column" }]}>
                    <View style = {[{flexDirection:"row"}]}>
                        <MaterialCommunityIcons name="home-map-marker" size={17} color="black" />
                        <Text style = {[{fontSize: 17}]}>Livraison à :</Text>
                    </View>
                    <Text>11 rue saint didier des bois/ 59780/ Baisieux</Text>
                </View>
            </View>
            <View style = {[{marginTop: 5}]}>
                <Button
                            onPress={ () => {
                            navigation.navigate('Commande')
                            }}
                            title="Voire +"
                            color="#841584"
                />
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
        backgroundColor: "#D5F5E3",
        width: "97%",
        borderTopRightRadius: 19,

    },
    datebox:{
        margin: 20,
        alignItems:"flex-end"
    },
    envbox:{
        backgroundColor:"white",
        borderRadius:19,
        padding: 5
    },
    produit:{
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
    }
});

export default _DeliveryBox;