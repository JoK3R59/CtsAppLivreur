import React from 'react';
import { View, Text, StyleSheet,Button,ScrollView} from 'react-native';

import _ProductBox from '../_shared/_ProductBox';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const DeliveryScreen = () => {

    return (
        <View style = {styles.container}>
          <ScrollView>
            <View  style = {[styles.com_box,{ flexDirection : "column" }]}>
                <View style = {[{ flexDirection : "row", justifyContent:"center"}]}>
                    <Text style = {[{fontSize:20}]}>Demande pour le :</Text>
                </View>
                <View style = {[{ flexDirection : "row", justifyContent:"center"}]}>
                    <Text style = {[{fontSize:15}]}>29/12/2021</Text>
                </View>
                <_ProductBox/>
                <View style = {[{ flexDirection : "row", justifyContent:"center"}]}>
                    <Entypo name="flow-line" size={27} color="#48C9B0" />
                </View>
                <View style = {[styles.liv_box,{ flexDirection : "column" }]}>
                    <View style = {[styles.bottom, { flexDirection : "row" }]}>
                        <View style = { styles.tab}/>
                        <View  style = {[styles.bottom, { flexDirection : "column" }]}>
                            <Text>Livraison au :</Text>
                            <Text>11 rue saint didier des bois</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.spec_box}>
                    <View style = {[styles.list_content, { flexDirection : "column" }]}>
                        <View  style = {[styles.list, { flexDirection : "row" }]}>
                            <AntDesign name="checkcircleo" size={15} color="#48C9B0" />
                            <Text style = {[{fontSize:15,paddingLeft:5}]}>fragile</Text>
                        </View>
                        <View  style = {[styles.list, { flexDirection : "row" }]}>
                            <AntDesign name="checkcircleo" size={15} color="#48C9B0" />
                            <Text style = {[{fontSize:15,paddingLeft:5}]}>haillon</Text>
                        </View>
                        <View  style = {[styles.list, { flexDirection : "row" }]}>
                            <AntDesign name="checkcircleo" size={15} color="#48C9B0" />
                            <Text style = {[{fontSize:15,paddingLeft:5}]}>remise en main propre</Text>
                        </View>
                    </View>
                    <View style = {[styles.msg_usr_content, { flexDirection : "column" }]}>
                        <View  style = {[{ flexDirection : "row" }]}>
                            <AntDesign name="message1" size={15} color="black" />
                            <Text style = {[{fontSize:15,paddingLeft:5}]}>Notes du client</Text>
                        </View>
                        <View  style = {[{ flexDirection : "row", marginTop:5}]}>
                            <View style = {[styles.tab,{marginRight:5}]}/>
                            <Text>testyuregyucbryu{"\n"}ezyvfeyuzvyuezvuzeezfbhez{"\n"}herbherbj</Text>
                        </View>   
                    </View>
                    <View style = {[{ flexDirection : "row", marginTop:5,justifyContent:"center"}]}>
                        <Button
                            onPress={ () => {
                            alert("action click (suivre)")
                            }}
                            title="suivre"
                            color="#841584"
                        ></Button>
                    </View>
                </View>
            </View>
          </ScrollView>
        </View>
    )
};    
const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#48C9B0',
        width:"100%",
        height:"100%"
    },
    com_box:{
        backgroundColor: 'white',
        marginHorizontal: 5,
        marginTop: 5,
        borderRadius:19,
        paddingBottom: 5
    },
    liv_box: {
        backgroundColor: '#D5F5E3',
        marginHorizontal: 5,
        marginTop: 5,
        borderRadius:19,
        padding: 5
    },
    spec_box:{
        backgroundColor: '#D5F5E3',
        marginHorizontal: 5,
        marginTop: 5,
        borderRadius:19,
        padding: 5
    },
    tab: {
        width:5,
        backgroundColor: '#48C9B0',
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15
    },
    bottom: {
        backgroundColor: 'white',
        marginHorizontal:10,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15
    },
    list_content:{
        backgroundColor: 'white',
        marginHorizontal:10,
        borderRadius: 15
    },
    list :{
        backgroundColor: 'white',
        marginHorizontal:10,
        marginVertical: 5
    },
    msg_usr_content:{
        backgroundColor: 'white',
        marginHorizontal:10,
        borderRadius: 15,
        padding:5,
        marginTop:5
    }
});
export default DeliveryScreen;