import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const image = require("./images/musicbg.jpg");



    function InitialScreen ({navigation}){
      return (
        
        <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}/>
      
        <View style={styles.intialScreenContainer}>
        <TouchableOpacity 
            onPress={() => navigation.navigate("Login")}
            style={styles.hostButton}
        >
            <Text style={styles.hostButtonText}>Host</Text>
        </TouchableOpacity>
        <TouchableOpacity 
             onPress={() => navigation.navigate("Login")}
            style={styles.guestButton}
        >
            <Text style={styles.guestButtonText}>Guest</Text>
        </TouchableOpacity>

        </View>
    </View>
      )
    }


    export default InitialScreen

    const styles = StyleSheet.create({

        container: 
        {
            flex: 1,
        },
        image: 
        {
            flex: 1,
            justifyContent:'center',
            
        },
        intialScreenContainer:
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            

        },
        
        hostButton:
        {
            backgroundColor:'#00076f',
            marginBottom:70,
            width:'60%',
            padding: 10,
            borderRadius: 10,
            alignItems: 'center',
        },
        hostButtonText:
        {
            color:'white',
            fontWeight: '700',
            fontSize: 16,
    
        },
        guestButton:
        {
            backgroundColor:'#e54ed0',
            width:'60%',
            padding: 10,
            borderRadius: 10,
            alignItems: 'center',
        },
        guestButtonText:
        {
            color:'white',
            fontWeight: '700',
            fontSize: 16,
        },
        
    })
