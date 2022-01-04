import React, { useCallback } from "react";
import { Text,Alert, TouchableHighlight, Linking, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (/*<Button title={children} onPress={handlePress} />*/
        <TouchableHighlight onPress={handlePress}>
            <View style={[styles.gg_map_bk_button,{flexDirection:"row"}]}>
                <View style={[styles.gg_icon_bk]}>
                    <MaterialCommunityIcons name="google-maps" size={20} color="white" />
                </View>
                <Text style={[{fontSize:20,marginLeft: 10}]}>{children}</Text>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    gg_map_bk_button:{
        backgroundColor:"white",
        padding: 5,
        borderRadius: 19,
        borderWidth: 2,
        borderColor:"black"
    },
    gg_icon_bk:{
        backgroundColor:"black",
        borderRadius: 19,
        padding:5
    }
});

export default OpenURLButton;