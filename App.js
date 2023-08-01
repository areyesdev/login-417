import React from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, Image } from 'react-native'


const LoginScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: '#A7C1E2' }}>
      <View style={{ alignItems: 'center' }}>
        <Image style={{ width: 230, height: 79 }} source={require('./assets/logo.png')} />
        <Image style={{ width: 340, height: 600 }} source={require('./assets/login.svg')} />
      </View>
      <TouchableOpacity onPress={() => { }} style={{ backgroundColor: '#6063FA', borderRadius: 10, padding: 20, margin: 30, marginTop: -5 }} >
        <Text style={{ marginBotton: 30, color: '#fff', textAlign: 'center', fontSize: 18 }}>Login</Text>
      </TouchableOpacity>
      <Text style={{ marginBottom: 30, color: '#fff', textAlign: 'center', fontSize: 18 }}>No tienes una cuenta
        <TouchableOpacity onPress={() => { }}>
          <Text style={{ color: '#6063FA', fontWeight: 'bold', fontSize: 18 }}> Sign In</Text>
        </TouchableOpacity>
      </Text>
    </SafeAreaView>
  )
}


export default LoginScreen