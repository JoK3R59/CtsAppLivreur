import React from 'react';
import { View, Text, StyleSheet,TouchableHighlight,SafeAreaView} from 'react-native';
import _receip_add_track from '../_shared/_AddReceipload';
import _deliv_add_track from '../_shared/_AddDelivload';
import { MaterialIcons } from '@expo/vector-icons';


const Button_val_reception = () => {
    return (
        <View style = {[styles.container_button_vd]}>
            <TouchableHighlight onPress={()=>alert("action click rcp")}>
                <View style = {[{flexDirection:"row",justifyContent:"space-between"}]}>
                    <Text style = {[{fontSize: 27,marginLeft:"15%",paddingVertical:10}]}>Réceptionné</Text>
                    <MaterialIcons name="move-to-inbox" size={55} color="black" />
                </View>
            </TouchableHighlight>
        </View>
    )
};

/*const Button_incident = () => {
    return (
        <TouchableHighlight>
            <View>
                <Text>button 2</Text>
            </View>
        </TouchableHighlight>
    )
};*/

const Button_val_delivery = () => {
    return (
        <View style = {[styles.container_button_vd]}>
            <TouchableHighlight onPress={()=>alert("action click dlv")}>
                <View style = {[{flexDirection:"row",justifyContent:"space-between"}]}>
                    <Text style = {[{fontSize: 27,marginLeft:"15%",paddingVertical:10}]}>Livré</Text>
                    <MaterialIcons name="outbox" size={55} color="black" />
                </View>
            </TouchableHighlight>
        </View>
    )
};

const Delivery_track_screen1 = ({navigation}) => {                    /*affichage en mode récupération de colis*/
    return (
        
        <View style = {[styles.container,{flexDirection:"column"}]}>
            <_receip_add_track navigation={navigation}/>
            <Button_val_reception/>
        </View>
        
    )
};

const Delivery_track_screen2 = () => {                    /*affichage en mode livraison de colis*/
    return (
        <View style = {[styles.container,{flexDirection:"column"}]}>
            <_deliv_add_track/>
            <Button_val_delivery/>
        </View>
    )
};

const trck_etat = true;

const Delivery_track1 =({navigation}) => {
    if (trck_etat !== false) {
        return(
            <Delivery_track_screen1 navigation={navigation}/>
        )
    }
    else {
        return(
            <Delivery_track_screen2/>
        )
    }
};

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#48C9B0',
        width:"100%",
        height:"100%"
    },
    container_button_vd: {
        backgroundColor: 'white',
        marginTop:"20%",
        marginHorizontal:"10%",
        borderRadius: 19,
        borderWidth: 3,
        borderColor:"black",
        paddingRight:5
    }
});

export default Delivery_track1;