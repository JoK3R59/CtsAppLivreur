import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

// Firebase config
import { auth } from '../../firebase';

// REDUX
import { useDispatch } from 'react-redux';
import { userConnected } from './redux/actions';

const textLogin = 'Introduisez votre login et votre mot de passe pour accéder à votre compte.';
const LoginScreen = ({onChange}) => {

    // REDUX fonction dispatch (envoi des données du store)
    const dispatch = useDispatch()

    const [ login, setLogin ] = useState('')

    const onChangeLogin = value => {
        setLogin(value)
    };

    const [ password, setPassword ] = useState('')

    const onChangePassword = value => {
        setPassword(value)
    };
    const onReset = () => {          //remettre les champs à 0
        setLogin('')
        setPassword('')
    }
     // Connexion à Firebase
    const handlerLogin = () => {

        auth
         .signInWithEmailAndPassword(login, password) //le login sera temporairement une addresse mail bidon
         .then(userCredentials => {

            const user = userCredentials.user;
            console.log('Connexion avec : ', user.email)
            dispatch(userConnected(user.email))
            onChange(true)
        })
        .catch(error => alert(error.message))
    }
    const onValidate = () => {
        /*validation coté front*/
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (((login !== '')&&(password !== ''))&&((login !== null)&&(password !== null))&&(re.test(login))){
            handlerLogin()
        }else {
            alert("login ou mot de passe incorrect")
            onReset()
              
        }
        
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
             onPress={ () => {onValidate()}}
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
        backgroundColor: '#fff'
    },
    textStyle: {
        textAlign: 'center',
        marginHorizontal: 30,
        marginTop:"50%",
        marginBottom: 20
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