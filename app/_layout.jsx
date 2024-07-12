import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Slot,Stack} from 'expo-router'

const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' option={{headerShown:false}} />
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})