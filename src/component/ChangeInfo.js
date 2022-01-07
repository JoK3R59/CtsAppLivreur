import React , {useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

const ChangeInfo = () => {
    const [phone_number, setPhone] = useState("0781963241");
    const [email, setEmail ]= useState("jhon.s@truc.com");
    
    return (

        <View style = { styles.container }>
                <View style = {styles.item}>
                    <Feather name="phone" size={24} color="black" />
                    <Text style={styles.text}>{phone_number}</Text>
                </View>
                <View style = {styles.item}>
                    <MaterialIcons name="alternate-email" size={24} color="black" />
                    <Text style={styles.text}>{email}</Text>
                </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#48C9B0',
        flexDirection:"column"
    },
    item: {
        backgroundColor: 'white',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 5,
        flexDirection:"row",
    },
    text:{
        fontSize:20,
        marginLeft: 20
    }
});

export default ChangeInfo;