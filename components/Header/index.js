import React from 'react'
import styles from "./style"
import { Image, View } from 'react-native'

export default function Header() {
    return (
        <View style={styles.container}>

            <Image style={styles.logo} source={require('../../assets/logo.png')}/>

            <Image style={styles.menu} source={require("../../assets/menu.png")}/>
            
        </View>
    )
}
