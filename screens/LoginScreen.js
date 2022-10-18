import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'



const imageBG={uri: "https://reactjs.org/logo-og.png" };


const HostLoginScreen = () => {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')


    const navigation=useNavigation()

    useEffect(() => 
    {  
        const hostSignOut = auth.onAuthStateChanged(user => 
            {
                if(user)
                {
                    navigation.replace("Home")
                }
            })
            return hostSignOut
    }, [])



    const hostSignUp = () =>
    {
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(hostInfo => 
            {
                const host=hostInfo.user;
            })
        .catch(error => alert(error.message))
    }
   
    const hostLogin = () =>
    {
        auth
        .signInWithEmailAndPassword(email,password)
        .then(hostInfo => 
            {
                const host=hostInfo.user;
            })
        .catch(error => alert(error.message))
    }


  return (
    
    
    <KeyboardAvoidingView style={styles.container} behavior="padding">
    
        
        <View style={styles.entryContainer}>
            <TextInput
            placeholder="Email"
            placeholderTextColor="#3b3c36"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
            />
            <TextInput
            placeholder="Password"
            placeholderTextColor="#3b3c36"
            value={password }
            onChangeText={text =>setPassword(text) }
            style={styles.input}
            secureTextEntry
            />
        </View>
        <View style={styles.buttonContainer}>

            <TouchableOpacity onPress={hostLogin} style={[styles.loginButton, styles.loginButtonOutline]}> 
            <Text style={styles.loginButtonText}>Login</Text> 
            </TouchableOpacity>

            <TouchableOpacity onPress={hostSignUp} style={[styles.registerButton, styles.registerButtonOutline]}>
            <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
    
  )
}

export default HostLoginScreen

const styles = StyleSheet.create({

    
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000'
    },

    entryContainer:
    {
        width:'80%',
        backgroundColor:'#ab20fd'
        
    },
    input:
    {
        backgroundColor:'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer:
    {
        width:'60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor:'black'
    },
    loginButton:
    {
        backgroundColor:'#200589',
        width:'50%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        
    },
    loginButtonOutline:
    {
        backgroundColor:'#200589',
        marginTop: 10,
        borderColor: '#ab20fd',
        borderWidth:5,
    },
    loginButtonText:
    {
        color:'white',
        fontWeight: '700',
        fontSize: 16,
        borderColor:'#ab20fd'

    },
    registerButton:
    {
        backgroundColor:'#200589',
        width:'50%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        
    },
    registerButtonOutline:
    {
        backgroundColor:'#200589',
        marginTop: 15,
        borderColor: '#ab20fd',
        borderWidth:5,
    },
    registerButtonText:
    {
        color:'white',
        fontWeight: '700',
        fontSize: 16,
    },
    
})