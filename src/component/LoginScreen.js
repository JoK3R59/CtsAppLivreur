import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import loginState from '../_shared/_EvalLogin';

const textLogin = 'Introduisez votre login et votre mot de passe pour accéder à votre compte.';
const LoginScreen = () => {

    const [ login, setLogin ] = useState('')

    const onChangeLogin = value => {
        setLogin(value)
    };

    const [ password, setPassword ] = useState('')

    const onChangePassword = value => {
        setPassword(value)
    };
    
    return (

        <View style = { styles.container }>
            <Text style = { styles.textStyle }>
                {textLogin}
            </Text>

            <View style = { styles.viewContent }>

                <Text>Utilisateur :</Text>

                <TextInput style = { styles.backgroundStyle }
                 placeholder = "Votre Login"
                 value = { login }
                 onChangeText = { onChangeLogin }
                />
            </View>

            <View style = {[ styles.viewContent, { marginBottom: 64 }]}>

                <Text>Mot de passe :</Text>

                <TextInput style = { styles.backgroundStyle }
                 placeholder = "*****"
                 value = { password }
                 onChangeText = { onChangePassword }
                />
            </View>

            <Button
             onPress={ () => {}}
             title= 'Connexion'
             color= "#06d6a0"
            />


        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#fff'
    },
    textStyle: {
        textAlign: 'center',
        marginHorizontal: 30,
        marginVertical: 50
    },
    viewContent: {
        marginVertical: 8
    },
    backgroundStyle: {
        backgroundColor: '#f0eeee',
        padding: 10,
        height: 40,
        width: 200,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        marginTop: 8
    }
});

export default LoginScreen;