import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Profil from "../component/Profil";
import ChangeInfo from "../component/ChangeInfo";
import HistoriqueUser from "../component/HistoUser";

const Stack = createStackNavigator();

function ProfilNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen options = {{ headerShown: false }}
             name = 'Mon Compte' component = { Profil } 
            />
            
            <Stack.Screen name = 'Mes infos' component = {ChangeInfo} />
            <Stack.Screen name = 'Historique de livraison' component = { HistoriqueUser } />
        </Stack.Navigator>
    )
};
export default ProfilNav;