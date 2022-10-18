import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

const navigation=useNavigation()

  const hostSignOut = () => 
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
     
      <TouchableOpacity onPress={hostSignOut} style={[styles.signOutButton, styles.signOutButtonOutline]}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create(
    {
        container:
        {
            backgroundColor:'black',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center'

        },
        signOutButton:
        {
          backgroundColor:'200589',
          width:'30%',
          padding: 10,
          borderRadius: 10,
          alignItems: 'center',
          marginBottom: 60,
        },
        signOutButtonOutline:
        {
          backgroundColor:'#200589',
          borderColor: '#ab20fd',
          borderWidth:5,
        },
        signOutButtonText:
        {
          color:'white',
          fontWeight: '900',
          fontSize: 15,
        },

    })