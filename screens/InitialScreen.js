import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'


const image = require("./images/musicbg.jpg");


const IntialScreen = () => {

    const navigation=useNavigation()
    
      const moveToLogIn = () => 
      {
        auth
            .signOut()
            .then(() => 
            {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
      }
    
      return (
        
        <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}/>
      
        <View style={styles.intialScreenContainer}>
        <TouchableOpacity 
            onPress={moveToLogIn}
            style={styles.hostButton}
        >
            <Text style={styles.hostButtonText}>Host</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            onPress={moveToLogIn}
            style={[styles.guestButton, styles.guestButtonTwo]}
        >
            <Text style={styles.guestButtonText}>Guest</Text>
        </TouchableOpacity>

        </View>
    </View>
      )
    }


    export default IntialScreen



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
        guestButtonTwo:
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