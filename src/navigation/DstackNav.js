import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import HomeDelivery from '../component/HomeDelivery';
import DeliveryScreen from '../component/DeliveryScreen';
 

const Stack = createStackNavigator();

function DstackNav() {
    return (
        <Stack.Navigator>

            <Stack.Screen options = {{ headerShown: false }}
             name = 'Dstack' component = { HomeDelivery } 
            />
            
            <Stack.Screen name = 'Delivery_screen' component = { DeliveryScreen } />
        </Stack.Navigator>
    )
};
export default DstackNav;