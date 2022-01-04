import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import DeliveryLoad from "../component/DeliveryLoad";
import Delivery_track1 from "../component/Delivery_track1";
import Delivery_track2 from "../component/Delivery_track2";

const Stack = createStackNavigator();

function DloadNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen options = {{ headerShown: false }}
             name = 'Dload' component = { DeliveryLoad } 
            />
            
            <Stack.Screen name = 'Ma livraison' component = { Delivery_track1 } />
            <Stack.Screen name = 'Détail du produit' component = { Delivery_track2 } />
        </Stack.Navigator>
    )
};
export default DloadNav;