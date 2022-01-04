import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableHighlight} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';
import OpenURLButton from './_CallGgMapApi';


const _receip_add_track = ({navigation}) => {
    const add_load="Ferme Mare, 78660 Ablis, France";
    const Gg_map_url="https://www.google.com/maps/";
    const copyToClipboard = (add) => {
        Clipboard.setString(add)
      }
    return (

        <View style = { styles.container }>
             <View style={[styles.add_box,{flexDirection:"column"}]}>
                 <View style={[styles.env_title,{flexDirection:"row"}]}>
                     <MaterialIcons name="all-inbox" size={24} color="black" />
                     <Text style={[{fontSize:20}]}>Enlèvement au:</Text>
                 </View>
                 <View style={[styles.env_add,{flexDirection:"row"}]}>
                     <AntDesign name="pushpin" size={24} color="red" />
                     <Text style={[{fontSize:14, color:"red"}]}>{add_load}</Text>
                 </View>
                 <View style={[styles.env_title,{flexDirection:"row"}]}>
                     <MaterialCommunityIcons name="truck-outline" size={24} color="black" />
                     <Text style={[{fontSize:20}]}>Prochain enlèvement au:</Text>
                 </View>
                 <View style={[styles.env_add,{flexDirection:"row"}]}>
                     <AntDesign name="pushpin" size={24} color="grey" />
                     <Text style={[{fontSize:14}]}>{add_load}</Text>
                 </View>
                 <View style={[styles.add_env_usr_deck,{flexDirection:"row",justifyContent:"space-between"}]}>
                     <OpenURLButton url={Gg_map_url}>Google map</OpenURLButton>
                     <TouchableHighlight onPress={copyToClipboard(add_load)}>
                         <View style={[styles.pp_map_bk_button,{flexDirection:"row"}]}>
                             <View style={[styles.pp_icon_bk]}>
                                <MaterialIcons name="file-copy" size={24} color="white" />
                             </View>
                         </View>
                     </TouchableHighlight>
                     <TouchableHighlight onPress={ () => {navigation.navigate('Détail du produit')}}>
                         <View style={[styles.pp_map_bk_button,{flexDirection:"row"}]}>
                             <View style={[styles.pp_icon_bk]}>
                                <Octicons name="checklist" size={24} color="white" />
                             </View>
                         </View>
                          
                     </TouchableHighlight>
                 </View>
             </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#D5F5E3',
        marginHorizontal: 5,
        marginTop: 5,
        borderRadius:19,
        paddingBottom: 5

    },
    add_box:{
        marginTop:10,
        marginLeft:5,
        justifyContent:"space-around"
    },
    env_title:{
        /*backgroundColor:"white",
        borderRadius: "19px",*/
        padding: 5,
    },
    env_add:{
        backgroundColor:"white",
        padding: 5,
        marginLeft:20,
        marginTop:5,
        marginBottom:10,
        width:"80%",
        backgroundColor:"white",
        borderRadius: 19
    },
    add_env_usr_deck:{
        marginLeft: 5
    },
    pp_map_bk_button:{
        backgroundColor:"#D5F5E3",
        padding: 5,
        borderRadius: 19,
        borderWidth: 2,
        borderColor:"#48C9B0",
        marginRight:10
    },
    pp_icon_bk:{
        backgroundColor:"#48C9B0",
        borderRadius: 19,
        padding:5
    }
});

export default _receip_add_track;