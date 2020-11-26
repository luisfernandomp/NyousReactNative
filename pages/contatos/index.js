import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';


const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginTop : StatusBar.current || 0
    }

})

const Contatos = () => {
    return(
        <View style={styles.container}>
            <Text>Contatos</Text>
        </View>
    )
}

export default Contatos;

